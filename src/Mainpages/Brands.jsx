import HPLogo from "../assets/brands/hplogo.png"
import LenovoLogo from "../assets/brands/lenovologo.png"
import DellLogo from "../assets/brands/delllogo.png"
import { Link } from "react-router-dom"
export default function Brands(){
    return(
        <div className="brands">
            <div className="brand--wrapper">
                <div>
                    {/* image should be wrapped in link */}
                    <Link to="/hp">
                        <img src={HPLogo} alt="" className="brand-image" />
                    </Link>
                    <h2>Hewlett-Packard</h2>
                    <p>The Hewlett-Packard Company, commonly shortened to Hewlett-Packard or HP, was an American multinational information technology company headquartered in Palo Alto, California</p>
                </div>
                <div>
                    <Link to="/lenovo">
                        <img src={LenovoLogo} alt="" className="lenovo-logo brand-image"/>
                    </Link>
                    <div className="lenovo-data">
                        <h2>Lenovo</h2>
                        <p>Lenovo Group Limited, often shortened to Lenovo, is a Chinese multinational technology company specializing in designing, manufacturing, and marketing consumer electronics, personal computers, software, business solutions, and related service</p>
                    </div>
                </div>
                <div>
                    <Link to="/dell">
                        <img src={DellLogo} alt="" className="brand-image"/>
                    </Link>
                    <h2>Dell</h2>
                    <p>Dell is an American technology company that develops, sells, repairs, and supports computers and related products and services and is owned by its parent company, Dell Technologies.</p>
                </div>
            </div>
        </div>
    )
}