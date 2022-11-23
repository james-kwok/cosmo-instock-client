import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logos/InStock-Logo_2x.png";

import "./Header.scss";

function Header (){
    return(
        <header className="header">
            <div className="header__logo">
                <Link to="/warehouses" className="header__link">
                    <img className="header__img" src={logo} alt="our logo"/>
                </Link>
            </div>
            
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item">
                        <NavLink to="/warehouses" className="header__navlink">Warehouses</NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink to="/inventory" className="header__navlink">Inventory</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;