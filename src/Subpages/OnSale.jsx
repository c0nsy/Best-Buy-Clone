import OnSaleBanner from "../assets/onsalebanner.png"
export default function OnSale(){
    return(
        <div className="on-sale">
            <img src={OnSaleBanner} className="deals-banner"/>
            <h3 className="deals-text">On Sale</h3>
            <div className="popular-deals--wrapper">
                <div>
                    <img src="" alt="" />
                    <h4>On Sale Laptops</h4>
                    <p>summery here</p>
                    <p>link to popular-laptop-deals TBM</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <h4>On Sale Monitors</h4>
                    <p>summary here</p>
                    <p>link to popular-monitor-deals</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <h4>On Sale Gaming Gear</h4>
                    <p>summary here</p>
                    <p>link to popular-gaminggear-deals</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <h4>On Sale Stero Systems</h4>
                    <p>summary here</p>
                    <p>link to popular-sterio-deals</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <h4>On Sale TV's</h4>
                    <p>summary here</p>
                    <p>link to popular-tvs-deals</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <h4>On Sale Appliances</h4>
                    <p>summary here</p>
                    <p>link to popular-appliances-deals</p>
                </div>
            </div>
        </div>
    )
}