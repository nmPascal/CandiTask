// interfaces
import { ICandidacy, ICompany, IStatusChart } from "../interfaces";

// utils
import { ECandidacyStatus } from "../utils";

// packages
import { Models } from "appwrite";

export const transformDocumentsToCandidacies = (documents: Models.Document[]): ICandidacy[] => {
    return documents.map((doc) => ({
        id: doc.$id,
        uid: doc.$uid,
        company: doc.company,
        country: doc.country,
        location: doc.location,
        position: doc.position,
        url: doc.url,
        remote: doc.remote,
        salary: doc.salary,
        details: doc.details,
        status: doc.status,
        createdAt: doc.$createdAt,
        updatedAt: doc.$updatedAt,
    }));
};

export const filterCurrentUserCandidacies = (candidacies: ICandidacy[], userId: string): ICandidacy[] => {
    return candidacies.filter((candidacy) => candidacy.uid === userId);
};

export const composeCompanyData = (candidacies: ICandidacy[]): ICompany[] => {
    const companies: Record<string, ICompany> = {};

    candidacies.forEach((candidacy) => {
        if (companies[candidacy.company]) {
            companies[candidacy.company].totalCandidacies += 1;
        } else {
            companies[candidacy.company] = {
                name: candidacy.company,
                country: candidacy.country,
                location: candidacy.location,
                totalCandidacies: 1,
            };
        }
    });

    return Object.values(companies);
};

// get the 4 most popular companies based on the number of candidacies
export const getPopularCompanies = (companies: ICompany[]): ICompany[] => {
    return companies.sort((a, b) => b.location.localeCompare(a.location)).slice(0, 3);
};

const _getStatusColor = (status: ECandidacyStatus): string => {
    switch (status) {
        case ECandidacyStatus.DONE:
            return "#08CC77";
        case ECandidacyStatus.PENDING:
            return "#F5B218";
        case ECandidacyStatus.REJECTED:
            return "#F21B7D";
        default:
            return "#000000";
    }
};

export const composeStatusChart = (candidacies: ICandidacy[]): IStatusChart[] => {
    const totalCandidacies = candidacies.length;
    const statusPercentages: Record<ECandidacyStatus, number> = {
        [ECandidacyStatus.DONE]: 0,
        [ECandidacyStatus.PENDING]: 0,
        [ECandidacyStatus.REJECTED]: 0,
    };

    candidacies.forEach((candidacy) => {
        statusPercentages[candidacy.status] += 1;
    });

    return Object.keys(statusPercentages).map((status) => {
        const name = `${status.charAt(0).toUpperCase()}${status.slice(1)}` as ECandidacyStatus;
        const value = (statusPercentages[status as ECandidacyStatus] / totalCandidacies) * 100;
        const color = _getStatusColor(status as ECandidacyStatus);
        return { name, value, color };
    });
};

export const isStatusChartComplete = (statusChart: IStatusChart[]): boolean => {
    return statusChart.some((status) => status.value === 100);
};

export const getAppointedCandidacies  = (candidacies: ICandidacy[]): ICandidacy[] => {
    return candidacies.filter((candidacy) => candidacy.status === ECandidacyStatus.DONE);
}
