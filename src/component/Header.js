import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
    const [login, setLogin] = useState("Login");

    const updateLogin = () => {
        login == "Login" ? setLogin("Logout") : setLogin("Login");
    }
    return (
        <div className="header">
            <div>
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-bar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li>Cart</li>
                    <Link to="/login"><button onClick={updateLogin}>{login}</button></Link>
                </ul>
            </div>
        </div>
    )
}

export default Header;