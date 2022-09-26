import HPLogo from "../assets/brands/hplogo.png"
import LenovoLogo from "../assets/brands/lenovologo.png"
import DellLogo from "../assets/brands/delllogo.png"
export default function Brands(){
    return(
        <div className="brands">
            <div className="brand--wrapper">
                <div>
                    {/* image should be wrapped in link */}
                    <img src={HPLogo} alt="" className="brand-image" />
                    <h2>Hewlett-Packard</h2>
                    <p>summary of the company</p>
                    <p>click here to go to their page or sm shit</p>
                </div>
                <div>
                    <img src={LenovoLogo} alt="" className="lenovo-logo brand-image"/>
                    <div className="lenovo-data">
                        <h2>Lenovo</h2>
                        <p>summary of the company</p>
                        <p>click here to go to their page or sm shit</p>
                    </div>
                </div>
                <div>
                    <img src={DellLogo} alt="" className="brand-image"/>
                    <h2>Dell</h2>
                    <p>summary of the company</p>
                    <p>click here to go to their page or sm shit!</p>
                </div>
            </div>
        </div>
    )
}