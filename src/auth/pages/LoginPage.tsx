import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

    const navigate = useNavigate();

    const onLogin = () => {
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