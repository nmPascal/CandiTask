/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

// providers
import { useUserContext } from "../providers";

// helpers
import { composeCompanyData, transformDocumentsToCandidacies } from "../helpers";

// interfaces
import { ICandidaciesProviderProps, ICandidacy, ICompany, INewCandidacy } from "../interfaces";

// utils
import { client } from "../utils";

// packages
import { Databases, ID } from "appwrite";

type Props = {
    children: ReactNode;
};

const CandidaciesContext = createContext<ICandidaciesProviderProps>({
    allCandidacies: [],
    selectedCandidacy: null,
    allCompanies: [],
    error: "",
    setSelectedCandidacy: () => { },
    createCandidacy: () => { },
});

export const useCandidaciesContext = () => useContext(CandidaciesContext);

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

export const CandidaciesProvider = ({ children }: Props) => {
    const { user } = useUserContext();
    const databases = new Databases(client);

    const [allCandidacies, setAllCandidacies] = useState<ICandidacy[]>([]);
    const [selectedCandidacy, setSelectedCandidacy] = useState<ICandidacy | null>(null);
    const [allCompanies, setAllCompanies] = useState<ICompany[]>([]);
    const [error, setError] = useState<string>("");

    const createCandidacy = (newCandidacy: INewCandidacy) => {
        if (!user) return;

        if (!newCandidacy.company) return setError("Company is required");
        if (!newCandidacy.position) return setError("Position is required");
        if (!newCandidacy.country) return setError("Country is required");
        if (!newCandidacy.location) return setError("Location is required");

        const newObj = { uid: user.userId, ...newCandidacy };
        const promise = databases.createDocument(
            DATABASE_ID,
            COLLECTION_ID,
            ID.unique(),
            newObj,
        );

        promise.then(() => {
            getCandidacies();
        }, (err) => setError(err.message));
    };

    const getCandidacies = () => {
        if (!user) return;
        const promise = databases.listDocuments(
            DATABASE_ID,
            COLLECTION_ID,
        );

        promise.then((res) => {
            const { documents } = res;
            setAllCandidacies(transformDocumentsToCandidacies(documents, user.userId));
        }, (err) => console.log("~> err", err));
    };

    useEffect(() => {
        if (!user) {
            setAllCandidacies([]);
            return;
        }
        // createCandidacy();
        getCandidacies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    useEffect(() => {
        if (!allCandidacies.length) return;
        setAllCompanies(composeCompanyData(allCandidacies));
    }, [allCandidacies]);

    useEffect(() => {
        
    }, [allCompanies]);

    const propsValues = {
        allCandidacies,
        selectedCandidacy,
        allCompanies,
        error,
        setSelectedCandidacy,
        createCandidacy,
    };

    return (
        <CandidaciesContext.Provider value={propsValues}>
            {children}
        </CandidaciesContext.Provider>
    );
};