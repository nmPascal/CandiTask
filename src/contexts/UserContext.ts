import { createContext, useContext } from "react";

// utils
import { EFormTypes } from "../utils";

// interfaces
import { IUserProviderProps } from "../interfaces";

export const UserContext = createContext<IUserProviderProps>({
    user: null,
    formType: EFormTypes.REGISTER,
    setFormType: () => { },
    registerUser: () => { },
    loginUser: () => { },
    logoutUser: () => { }
});

export const useUserContext = () => useContext(UserContext);