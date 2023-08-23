import { ReactNode, useEffect, useState } from "react";

// contexts
import { UserContext } from "../contexts";

// interfaces
import { IUser, IUserCredentials, IUserRegister } from "../interfaces";

// utils
import { EFormTypes, client } from "../utils";

// packages
import { Account, ID } from "appwrite";

type Props = {
    children: ReactNode;
};

export const UserProvider = ({ children }: Props) => {
    const account = new Account(client);

    const [error, setError] = useState<string | null>(null);
    const [user, setUser] = useState<IUser | null>(null);
    const [formType, setFormType] = useState<EFormTypes>(EFormTypes.REGISTER);

    const toggleFormType = () => {
        setFormType((prev) => {
            return prev === EFormTypes.LOGIN ? EFormTypes.REGISTER : EFormTypes.LOGIN;
        });
    };

    const _checkIfLoggedIn = () => {
        const storage = localStorage.getItem("cookieFallback");

        if (storage) {
            const promise = account.get();

            promise.then((res) => {
                const { $id, name, email } = res;
                setUser({ userId: $id, name, email });
            }, (err) => {
                setError(err.message);
                setUser(null);
            });
        }
    };

    const signUp = (newUser: IUserRegister) => {
        const { email, password, name } = newUser;
        const promise = account.create(ID.unique(), email, password, name);

        promise.then(() => setFormType(EFormTypes.LOGIN), (err) => setError(err.message));
    };

    const signIn = (credentials: IUserCredentials) => {
        const { email, password } = credentials;
        const promise = account.createEmailSession(email, password);

        promise.then(() => _checkIfLoggedIn(), (err) => setError(err.message));
    };

    const logoutUser = () => {
        const promise = account.deleteSession("current");

        promise.then(() => setUser(null), (err) => setError(err.message));
    };

    useEffect(() => {
        _checkIfLoggedIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const propsValues = {
        formType,
        user,
        error,
        toggleFormType,
        setError,
        signUp,
        signIn,
        logoutUser,
    };

    return (
        <UserContext.Provider value={propsValues}>
            {children}
        </UserContext.Provider>
    );
};