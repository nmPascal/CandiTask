// utils
import { EFormTypes } from "../utils";

export interface IUserProviderProps {
    formType: EFormTypes;
    user: IUser | null;
    error: string | null;
    toggleFormType: () => void;
    signUp: (newUser: IUserRegister) => void;
    signIn: (credentials: IUserCredentials) => void;
    logoutUser: () => void;
}

export interface IUserRegister {
    email: string;
    password: string;
    name: string;
}

export interface IUserCredentials {
    email: string;
    password: string;
}

export interface IUser {
    userId: string;
    name: string;
    email: string;
}