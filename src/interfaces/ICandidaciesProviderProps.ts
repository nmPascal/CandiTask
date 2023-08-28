import { ECandidacyRemote, ECandidacyStatus } from "../utils";

export interface ICandidaciesProviderProps {
    allCandidacies: ICandidacy[];
    selectedCandidacy: ICandidacy | null;
    allCompanies: ICompany[];
    error: string;
    setSelectedCandidacy: (candidacy: ICandidacy) => void;
    createCandidacy: (candidacy: INewCandidacy) => void;
    deleteCandidacy: (id: string) => void;
}

type OmitKeys<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// TODO: add company website
export interface ICandidacy {
    id: string;
    uid: string;
    company: string;
    country: string;
    location: string;
    position: string;
    note: string;
    url: string;
    remote: ECandidacyRemote;
    salary: string;
    status: ECandidacyStatus;
    createdAt: string;
    updatedAt: string;
}

export type INewCandidacy = OmitKeys<ICandidacy, "id" |  "uid" | "createdAt" | "updatedAt" | "note">;

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