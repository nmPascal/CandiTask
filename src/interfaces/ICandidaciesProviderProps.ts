import { ECandidacyRemote, ECandidacyStatus } from "../utils";

export interface ICandidaciesProviderProps {
    allCandidacies: ICandidacy[];
    allCompanies: ICompany[];
    createCandidacy: (candidacy: INewCandidacy) => void;
}

type OmitKeys<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface ICandidacy {
    id: string;
    uid: string;
    company: string;
    country: string;
    location: string;
    position: string;
    url: string;
    remote: ECandidacyRemote;
    salary: string;
    status: ECandidacyStatus;
    createdAt: string;
    updatedAt: string;
}

// Create a new interface by omitting specific keys from ICandidacy
export type INewCandidacy = OmitKeys<ICandidacy, "id" |  "uid" | "createdAt" | "updatedAt">;

export interface ICompany {
    name: string;
    country: string;
    location: string;
    totalCandidacies: number;
}

export interface IStatusChart {
    name: string;
    value: number;
    color: string;
}