import { NavLink, useNavigate } from "react-router-dom"
import './Navbar.css';
import logo from '/logo.jpg';
import { useAuthContext } from "../../auth/context/AuthContext";

export const Navbar = () => {

    const navigate = useNavigate();
    const {logout, authState} = useAuthContext();

    const onLogout = () => {
        logout();
        localStorage.removeItem('name');
        navigate("/login", {
            replace: true,
        });
    }

    return(
        <nav className="navbar">
            <NavLink to="/" className="logo">
                <div className="logo-img">
                    <img src={logo} alt="Logo image" />
                </div>
                <h3>Heroes</h3>
            </NavLink>
            <ul className="nav-items">
                <NavLink to="/marvel">Marvel</NavLink>
                <NavLink to="/dc">DC</NavLink>
                <NavLink to="/search">Search</NavLink>

                <button className="logout-button alter"><i className="ri-user-line"></i> {authState.name}</button>
                <button className="logout-button" onClick={onLogout}><i className="ri-logout-box-line"></i></button>
            </ul>
        </nav>
    )
}