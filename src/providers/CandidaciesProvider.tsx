/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

// providers
import { useUserContext } from "../providers";

// helpers
import { composeCompanyData, filterCurrentUserCandidacies, transformDocumentsToCandidacies } from "../helpers";

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
    allCompanies: [],
    createCandidacy: () => { },
});

export const useCandidaciesContext = () => useContext(CandidaciesContext);

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

export const CandidaciesProvider = ({ children }: Props) => {
    const { user } = useUserContext();
    const databases = new Databases(client);

    const [allCandidacies, setAllCandidacies] = useState<ICandidacy[]>([]);
    const [allCompanies, setAllCompanies] = useState<ICompany[]>([]);

    const createCandidacy = (newCandidacy: INewCandidacy) => {
        // TODO: error handling
        if (!user) return;

        const newObj = { uid: user.userId, ...newCandidacy };
        const promise = databases.createDocument(
            DATABASE_ID,
            COLLECTION_ID,
            ID.unique(),
            newObj,
        );

        promise.then(() => {
            getCandidacies();
        }, (err) => console.log("~> err", err));
    };

    const getCandidacies = () => {
        if (!user) return;
        const promise = databases.listDocuments(
            DATABASE_ID,
            COLLECTION_ID,
        );

        promise.then((res) => {
            const { documents } = res;
            const candidacies = transformDocumentsToCandidacies(documents);
            setAllCandidacies(filterCurrentUserCandidacies(candidacies, user.userId));
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
        //FIXME: Appointments component call new data but not PopularCompanies
    }, [allCandidacies]);

    const propsValues = {
        allCandidacies,
        allCompanies,
        createCandidacy,
    };

    return (
        <CandidaciesContext.Provider value={propsValues}>
            {children}
        </CandidaciesContext.Provider>
    );
};