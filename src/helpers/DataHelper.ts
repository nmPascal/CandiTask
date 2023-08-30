// interfaces
import { ICandidacy, ICompany, IStatusChart } from "../interfaces";

// utils
import { ECandidacyStatus } from "../utils";

// packages
import { Models } from "appwrite";

export const transformDocsToCandidacies = (documents: Models.Document[], uid: string): ICandidacy[] => {
    return documents.map((doc) => ({
        uid,
        id: doc.$id,
        company: doc.company,
        country: doc.country,
        location: doc.location,
        position: doc.position,
        note: doc.note,
        url: doc.url,
        remote: doc.remote,
        salary: doc.salary,
        status: doc.status,
        createdAt: doc.$createdAt,
        updatedAt: doc.$updatedAt,
    }));
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

export const getPopularCompanies = (companies: ICompany[]): ICompany[] => {
    return companies
        .sort((a, b) => b.totalCandidacies - a.totalCandidacies)
        .slice(0, 3);
};

export const getStatusColor = (status: ECandidacyStatus): string => {
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

export const composeStatusChart = (
    candidacies: ICandidacy[] | ICandidacy
): IStatusChart[] => {
    const statusCount: Record<ECandidacyStatus, number> = {
        [ECandidacyStatus.DONE]: 0,
        [ECandidacyStatus.PENDING]: 0,
        [ECandidacyStatus.REJECTED]: 0,
    };

    if (Array.isArray(candidacies)) {
        candidacies.forEach((candidacy) => {
            statusCount[candidacy.status] += 1;
        });
    } else {
        statusCount[candidacies.status] = 1;
    }

    const filteredStatuses = Object.keys(statusCount).filter(
        (status) => statusCount[status as ECandidacyStatus] > 0
    );

    return filteredStatuses.map((status) => {
        const name = `${status.charAt(0).toUpperCase()}${status.slice(
            1
        )}` as ECandidacyStatus;
        const value =
            (statusCount[status as ECandidacyStatus] /
                (Array.isArray(candidacies) ? candidacies.length : 1)) *
            100;
        const color = getStatusColor(status as ECandidacyStatus);
        return { name, value, color };
    });
};

export const isStatusChartComplete = (statusChart: IStatusChart[]): boolean => {
    return statusChart.some((status) => status.value === 100);
};

export const getAppointedCandidacies = (
    candidacies: ICandidacy[]
): ICandidacy[] => {
    return candidacies.filter(
        (candidacy) => candidacy.status === ECandidacyStatus.DONE
    );
};

export const formatDateTime = (date: string): string => {
    const dateTime = new Date(date);
    const day = dateTime.getDate().toString().padStart(2, "0");
    const month = (dateTime.getMonth() + 1).toString().padStart(2, "0");
    const year = dateTime.getFullYear();
    const hours = dateTime.getHours().toString().padStart(2, "0");
    const minutes = dateTime.getMinutes().toString().padStart(2, "0");

    return `${day}/${month}/${year} ${hours}:${minutes}`;
};
