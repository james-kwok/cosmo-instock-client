import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logos/InStock-Logo_2x.png";

import "./Header.scss";

function Header (){
    return(
        <header className="header">
            <div className="header__logo">
                <Link to="/warehouses">
                    <img src={logo} alt="our logo"/>
                </Link>
            </div>
            
            <nav className="header__nav">
                <ul>
                    <li>
                        <NavLink to="/warehouses">
                            <p>Warehouses</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/inventory">
                            <p>Inventory</p>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;