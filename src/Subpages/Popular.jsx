import PopularBanner from "../assets/populardeals.png"
export default function Popular(){
    return(
        <div className="popular-deals">
            <img src={PopularBanner} className="popular-banner"/>
            <h3 className="popular-title">Popular Deals</h3>
            <div className="popular-deals--wrapper">
                <div>
                    <img src="" alt="" />
                    <h4>Popular Laptops</h4>
                    <p>summery here</p>
                    <p>link to popular-laptop-deals TBM</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <h4>Popular Monitors</h4>
                    <p>summary here</p>
                    <p>link to popular-monitor-deals</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <h4>Popular Gaming Gear</h4>
                    <p>summary here</p>
                    <p>link to popular-gaminggear-deals</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <h4>Popular Stero Systems</h4>
                    <p>summary here</p>
                    <p>link to popular-sterio-deals</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <h4>Popular TV's</h4>
                    <p>summary here</p>
                    <p>link to popular-tvs-deals</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <h4>Popular Appliances</h4>
                    <p>summary here</p>
                    <p>link to popular-appliances-deals</p>
                </div>
            </div>
        </div>
    )
}