import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext";

export const LoginPage = () => {

    const navigate = useNavigate();
    const {login} = useAuthContext();

    const onLogin = () => {
        login();
        navigate("/", {
            replace: true
        });
    }

    return(
        <div className="container">
            <h1>Login</h1>
            <button className="btn-primary" onClick={onLogin}>Click to login</button>
        </div>
    )
}