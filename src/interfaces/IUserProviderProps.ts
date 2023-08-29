// utils
import { EFormTypes } from "../utils";

export interface IUserProviderProps {
    formType: EFormTypes;
    user: IUser | null;
    error: string | null;
    isLoading: boolean;
    toggleFormType: () => void;
    signUp: (newUser: IUserRegister) => void;
    signIn: (credentials: IUserCredentials) => void;
    logoutUser: () => void;
}

export interface IUser {
    userId: string;
    name: string;
    email: string;
    registration: string;
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