import NewBanner from "../assets/newbanner.png"
export default function New(){
    return(
        <div className="new">
            <img src={NewBanner} className="deals-banner" />
            <h3 className="deals-text">New Inventory</h3>
            <div className="popular-deals--wrapper">
                <div>
                    <img src="" alt="" />
                    <h4>New Laptops</h4>
                    <p>summery here</p>
                    <p>link to popular-laptop-deals TBM</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <h4>NewMonitors</h4>
                    <p>summary here</p>
                    <p>link to popular-monitor-deals</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <h4>New Gaming Gear</h4>
                    <p>summary here</p>
                    <p>link to popular-gaminggear-deals</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <h4>New Stero Systems</h4>
                    <p>summary here</p>
                    <p>link to popular-sterio-deals</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <h4>New TV's</h4>
                    <p>summary here</p>
                    <p>link to popular-tvs-deals</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <h4>New Appliances</h4>
                    <p>summary here</p>
                    <p>link to popular-appliances-deals</p>
                </div>
            </div>
        </div>
    )
}