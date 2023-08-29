// utils
import { ECandidacyRemote, ECandidacyStatus } from "../utils";

export interface ICandidaciesProviderProps {
    allCandidacies: ICandidacy[];
    chosenCand: ICandidacy | null;
    allCompanies: ICompany[];
    error: string;
    setChosenCand: (candidacy: ICandidacy) => void;
    createCandidacy: (candidacy: INewCandidacy) => void;
    editCandidacy: (editedData: IEditCandidacy) => void;
    deleteCandidacy: (id: string) => void;
}

type OmitKeys<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

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

export type INewCandidacy = OmitKeys<ICandidacy,"id" | "uid" | "note" | "createdAt" | "updatedAt">;

export type IEditCandidacy = OmitKeys<
    ICandidacy,
    | "uid"
    | "company"
    | "country"
    | "location"
    | "position"
    | "url"
    | "createdAt"
    | "updatedAt"
>;

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
