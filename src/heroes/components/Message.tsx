import { ReactNode } from "react"
import './Message.css';

interface Props{
    children: ReactNode,
    className: string
}


export const Message = ({children, className}: Props) => {
    return(
        <p className={`message ${className}`}>{children}</p>
    )
}