import { ECandidacyRemote, ECandidacyStatus } from "../utils";

export interface ICandidaciesProviderProps {
    allCandidacies: ICandidacy[];
    appointments: ICandidacy[];
    createCandidacy: (candidacy: INewCandidacy) => void;
    getCandidacies: () => void;
}

type OmitKeys<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface ICandidacy {
    id: string;
    uid: string;
    company: string;
    position: string;
    country: string;
    city: string;
    remote: ECandidacyRemote;
    salary: string;
    details: string;
    url: string;
    status: ECandidacyStatus;
    createdAt: string;
    updatedAt: string;
}

// Create a new interface by omitting specific keys from ICandidacy
type INewCandidacy = OmitKeys<ICandidacy, "createdAt" | "updatedAt" | "id" | "status" | "uid">;