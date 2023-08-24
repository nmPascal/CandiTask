/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect } from "react";

// contexts
import { CandidaciesContext, useUserContext } from "../contexts";

// utils
import { client } from "../utils";

// packages
import { Databases, ID } from "appwrite";

type Props = {
    children: ReactNode;
};

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;


export const CandidaciesProvider = ({ children }: Props) => {
    const { user } = useUserContext();
    const databases = new Databases(client);

    const createCandidacy = () => {
        console.log('~> in', ); //REMOVE
        if (!user) return;

        const newObj = {
            uid: user.userId,
            company: "SpaceX",
            position: "Software Engineer",
            country: "United States",
            remote: "yes",
            salary: "60k-90k",
            details: "React, TS, Redux, MUI",
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
            //FIXME [Query.equal("uid", [user.userId])]
        );

        promise.then((res) => console.log("~> res", res), (err) => console.log("~> err", err));
    };

    const propsValues = {};

    return (
        <CandidaciesContext.Provider value={propsValues}>
            {children}
        </CandidaciesContext.Provider>
    );
};