import { createContext, useContext } from "react";
import {  stateType } from "./authReducer";


interface contextProps{
    authState: stateType; 
    login: () => void,
    logout: () => void
}

export const authContext = createContext<contextProps | null>(null);


export const useAuthContext = () => {
    const context = useContext(authContext);

    if(!context){
        throw new Error(`Context must be inside of a provider`);
    }

    return context;
}