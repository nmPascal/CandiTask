import { ECandidacyRemote, ECandidacyStatus } from "../utils";

export interface ICandidaciesProviderProps {
    createCandidacy: (candidacy: INewCandidacy) => void;
    getCandidacies: () => void;
}

export interface INewCandidacy {
    uid: string;
    company: string;
    position: string;
    country: string;
    city: string;
    remote: ECandidacyRemote;
    salary: string;
    details: string;
}

export interface ICandidacy extends INewCandidacy {
    status: ECandidacyStatus
}