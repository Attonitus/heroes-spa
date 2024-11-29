import { Navigate } from "react-router-dom";
import { useAuthContext } from "../auth/context/AuthContext"
import { ReactNode } from "react";

interface Props{
    children: ReactNode
}

export const PublicRouter = ({children}: Props) => {
    const {authState} = useAuthContext();

    return(authState.logged)
    ? <Navigate to="/" />
    : children
}