// utils
import { EFormTypes } from "../utils";

export interface IUserProviderProps {
    error: string | null;
    user: IUser | null;
    formType: EFormTypes;
    setError: (error: string | null) => void;
    setFormType: (formType: EFormTypes) => void;
    registerUser: (newUser: IUserRegister) => void;
    loginUser: (credentials: IUserCredentials) => void;
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