import { ReactNode, useReducer } from "react";
import { AuthTypes } from "../interfaces/AuthInterface";
import { authReducer } from "./authReducer";
import { authContext } from "./AuthContext";

const init = () => {
    let name : string;

    if(localStorage.getItem('name')){
        name = JSON.parse(localStorage.getItem('name')!);
    } else {
        name = '';
    }

    return {
        logged: !!name,
        name
    }
}

interface Props{
    children: ReactNode
}

export const AuthContextProvider = ({children}: Props) => {

    const [authState, dispatch] = useReducer(authReducer, {}, init);

    const login = () => {
        const name = 'Samitita'
        const action = {
            type: AuthTypes.login,
            payload: {
                name
            }
        }
        localStorage.setItem('name', JSON.stringify(name));
        dispatch(action);
    }

    const logout = () => {
        const action = {
            type: AuthTypes.logout,
            payload: {
                name: null
            }
        }
        dispatch(action);
    }

    return(
        <authContext.Provider value={{ authState, login, logout }}>
            {children}
        </authContext.Provider>
    )
}
