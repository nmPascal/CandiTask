// interfaces
import { ICandidacy } from "../interfaces";

// utils
import { ECandidacyStatus } from "../utils";

// packages
import { Models } from "appwrite";

export const transformDocumentsToCandidacies = (documents: Models.Document[]): ICandidacy[] => {
    return documents.map((doc) => ({
        id: doc.$id,
        uid: doc.$uid,
        company: doc.company,
        position: doc.position,
        country: doc.country,
        city: doc.city,
        remote: doc.remote,
        salary: doc.salary,
        details: doc.details,
        url: doc.url,
        status: doc.status,
        createdAt: doc.$createdAt,
        updatedAt: doc.$updatedAt,
    }));
};

export const getAppointedCandidacies  = (candidacies: ICandidacy[]): ICandidacy[] => {
    return candidacies.filter((candidacy) => candidacy.status === ECandidacyStatus.APPOINTMENT);
}
