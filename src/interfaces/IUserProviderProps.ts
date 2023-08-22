// utils
import { EFormTypes } from "../utils";

export interface IUserProviderProps {
    user: IUser | null;
    formType: EFormTypes;
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