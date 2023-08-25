/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

// providers
import { useUserContext } from "../providers";

// helpers
import { composeCompanyData, transformDocumentsToCandidacies } from "../helpers";

// interfaces
import { ICandidaciesProviderProps, ICandidacy, ICompany } from "../interfaces";

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

    const createCandidacy = () => {
        if (!user) return;
        console.log('~> ', user.userId); //REMOVE
        const newObj = {
            uid: user.userId,
            company: "SpaceX",
            position: "Software Engineer",
            country: "United States",
            location: "Los Angeles",
            remote: "yes",
            salary: "60k-90k",
            details: "React, TS, Redux, MUI",
            url: "https://www.spacex.com/careers/list",
        };

        const promise = databases.createDocument(
            DATABASE_ID,
            COLLECTION_ID,
            ID.unique(),
            newObj,
        );

        promise.then((res) => console.log("~> res", res), (err) => console.log("~> err", err));
    };

    const getCandidacies = () => {
        if (!user) return;
        const promise = databases.listDocuments(
            DATABASE_ID,
            COLLECTION_ID,
        );

        promise.then((res) => {
            const { documents } = res;
            // TODO: to filter current User candidacies, add permisions in ICanidacy
            setAllCandidacies(transformDocumentsToCandidacies(documents));
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