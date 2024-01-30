import  { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
    const [login, setLogin] = useState("Login");
    const {isLoggedIn,userName} = useContext(UserContext);
    
    const cartItem = useSelector((state)=>state.cart.items);
    const online = useOnline();

    const updateLogin = () => {
        login == "Login" ? setLogin("Logout") : setLogin("Login");
    }
    return (
        <div className="flex justify-between border border-black">
            <div>
                <img className="w-28" src={LOGO_URL}></img>
            </div>
            <div>
                <ul className="flex">
                    <li className="p-5 list-none">Status : {online?"Online❤️":"Offline😡"}</li>
                    <li className="p-5 list-none"><Link to="/">Home</Link></li>
                    <li className="p-5 list-none"><Link to="/contact">Contact Us</Link></li>
                    <li className="p-5 list-none"><Link to="/about">About Us</Link></li>
                    <li className="p-5 list-none"><Link to="/cart">Cart({cartItem.length} Items)</Link></li>
                    
                    <Link to="/login" className="p-5 list-none"><button onClick={updateLogin}>{login}</button></Link>
                </ul>
            </div>
        </div>
    )
}

export default Header;