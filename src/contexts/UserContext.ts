import { createContext, useContext } from "react";

// utils
import { EFormTypes } from "../utils";

// interfaces
import { IUserProviderProps } from "../interfaces";

export const UserContext = createContext<IUserProviderProps>({
    formType: EFormTypes.REGISTER,
    user: null,
    error: null,
    toggleFormType: () => { },
    signUp: () => { },
    signIn: () => { },
    logoutUser: () => { }
});

export const useUserContext = () => useContext(UserContext);