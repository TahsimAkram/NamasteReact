import { LOGO_URL } from "../utils/constants";
const Header = () => {
    return (
        <div className="header">
            <div>
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-bar">
                <ul>
                    <li>Home</li>
                    <li>Restaurant</li>
                    <li>About Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;