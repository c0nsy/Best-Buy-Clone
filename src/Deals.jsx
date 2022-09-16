import DealsBanner from "./assets/dealsbanner.png"
import FeaturedLaptop from "./assets/featured-laptop.png"
import FeaturedTV from "./assets/featured-tv.png"
import FeaturedAppliances from "./assets/featured-appliances.png"
import FeaturedPhones from "./assets/featured-phones.png"

// comment

export default function Deals(){
    return(
        <div className="deals">
            <h1>Top Deals</h1>
            <img src={DealsBanner} className="deals-banner"/>
            <h3>Featured Top Deals</h3>
            {/* use grid system here to display all the deals */}
            <div className="featured-deals--wrapper">
                <div className="deals-laptops">
                    <img src={FeaturedLaptop} className="featured-laptop-image" />
                    <h4>Save up to $200 on select Back to School laptops from top brands.</h4>
                    <p>Plus, get 15 months of Microsoft 365 for the price of 12 with select laptop purchases</p>
                    <p>Shop now (add link in future)</p>
                </div>
                <div className="deals-tv">
                    <img src={FeaturedTV} alt="" className="featured-tv-image" />
                    <h4>Save up to $700 on select 4K and 8K Ultra HD TVs.</h4>
                    <p>Plus, save $30 on a Sanus TV wall mount with a purchase of select TVs.</p>
                    <p>Shop now (add link in the future)</p>
                </div>
                <div className="deals-appliances">
                    <img src={FeaturedAppliances} alt="" className="featured-appliances-image" />
                    <h4>Start saving big on select major appliances with amazing deals.</h4>
                    <p>Plus, save up to 25% on select open box appliances and bring home a major appliance for a lower price.</p>
                    <p>Shop now (add link in the future)</p>
                </div>
                <div className="deals-phones">
                    <img src={FeaturedPhones} alt="" className="featured-phones-image" />
                    <h4>Get 20GB of data for $55/m with Rogers and Bell Student Plans*.</h4>
                    <p>When you finance a phone and activate a new 24-month plan with AutoPay. *T&C apply.</p>
                    <p>Shop now (add link in the future)</p>
                </div>
                <div className="deals-gaming"></div>
                <div className="deals-audio"></div>
                <div className="deals-small-appliances"></div>
                <div className="deals-small-health"></div>
            </div>
        </div>
    )
}