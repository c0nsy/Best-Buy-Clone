import Logo from "./assets/bestbuylogo.png"
import { Link } from "react-router-dom"
export default function Navbar(){
    return(
        <div className="navbar">
            <img src={Logo} className="navbar-logo" />
            <div className="search-bar">
                <form className="search-form">
                    <input type="text" placeholder="Search.." name="search" />
                    {/* maybe add button later for form submission */}
                    {/* <button type="submit"><i className="fa fa-search"></i></button> */}
                </form>
            </div>
            <div className="links">
                <ul>
                    <li>
                        {/* <a href="/">Home</a> */}
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        {/* <a href="/deals">Deals</a> */}
                        <Link to="/deals">Deals</Link>
                    </li>
                    <li>
                        {/* <a href="/about">About</a> */}
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        {/* <a href="/cart">Cart</a> */}
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}