import { Link } from "react-router-dom"
export default function DropDown(){
    return(
        <div className="dropdown">
            <ul className="dropdown-links">
                <li className="dropdown-sales-header">
                    <Link to="/sales">Sales</Link>
                    <ul className="dropdown-sales">
                        <li>
                            <Link to="/popular">Popular</Link>
                        </li>
                        <li>
                            <Link to="/on-sale">On Sale</Link>
                        </li>
                        <li>
                            <Link to="/new">New</Link>
                        </li>
                    </ul>
                </li>
                <li className="dropdown-brands-header">
                    <Link to="/brands">Brands</Link>
                    <ul className="dropdown-brands">
                        <li>
                            <Link to="/hp">HP</Link>
                        </li>
                        <li>
                            <Link to="/dell">Dell</Link>
                        </li>
                        <li>
                            <Link to="/lenovo">Lenovo</Link>
                        </li>
                    </ul>
                </li>
                <li className="dropdown-locations-header">
                    <Link to="/locations">Locations</Link>
                    <ul className="dropdown-locations">
                        <li>
                            <Link to="/ontario">Ontario</Link>
                        </li>
                        <li>
                            <Link to="/toronto">Toronto</Link>
                        </li>
                        <li>
                            <Link to="/owen-sound">Owen Sound</Link>
                        </li>
                    </ul>
                </li>
                <li className="dropdown-about-header">
                    <Link to="/about">About</Link>
                    <ul className="dropdown-about">
                        <li>
                            <Link to="/our-story">Our Story</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/careers">Careers</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}