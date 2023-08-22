import { ReactNode, useEffect, useState } from "react";

// contexts
import { UserContext } from "../contexts";

// interfaces
import { IUser, IUserCredentials, IUserRegister } from "../interfaces";

import { Account, ID } from "appwrite";

import { EFormTypes, client } from "../utils";

type Props = {
    children: ReactNode;
};

export const UserProvider = ({ children }: Props) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [formType, setFormType] = useState<EFormTypes>(EFormTypes.REGISTER);
    const account = new Account(client);

    const _checkIfLoggedIn = () => {
        const storage = localStorage.getItem("cookieFallback");

        if (storage) {
            const promise = account.get();

            promise.then((res) => {
                const { $id, name, email } = res;
                setUser({ userId: $id, name, email });
            }, (err) => {
                console.error("~> err", err);
                setUser(null);
            });
        }
    };

    const registerUser = (newUser: IUserRegister) => {
        const { email, password, name } = newUser;
        const promise = account.create(ID.unique(), email, password, name);

        promise.then(() => setFormType(EFormTypes.LOGIN), (err) => console.error("~> err", err));
    };

    const loginUser = (credentials: IUserCredentials) => {
        const { email, password } = credentials;
        const promise = account.createEmailSession(email, password);

        promise.then(() => _checkIfLoggedIn(), (err) => console.error("~> err", err));
    };

    const logoutUser = () => {
        const promise = account.deleteSession("current");

        promise.then(() => setUser(null), (err) => console.error("~> err", err));
    };

    useEffect(() => {
        _checkIfLoggedIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const propsValues = {
        user,
        formType,
        setFormType,
        registerUser,
        loginUser,
        logoutUser,
    };

    return (
        <UserContext.Provider value={propsValues}>
            {children}
        </UserContext.Provider>
    );
};