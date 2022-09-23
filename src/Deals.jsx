import DealsBanner from "./assets/dealsbanner.png"
import FeaturedLaptop from "./assets/featured-laptop.png"
import FeaturedTV from "./assets/featured-tv.png"
import FeaturedAppliances from "./assets/featured-appliances.png"
import FeaturedPhones from "./assets/featured-phones.png"
import FeaturedGaming from "./assets/featured-gaming.png"
import FeaturedAudio from "./assets/featured-audio.png"
import FeaturedSmallAppliances from "./assets/featured-smallappliances.png"
import FeaturedHealth from "./assets/featured-health.jpg"

export default function Deals(){
    return(
        <div className="deals">
            <img src={DealsBanner} className="deals-banner"/>
            <h3 className="deals-text">Featured Top Deals</h3>
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
                <div className="deals-gaming">
                    <img src={FeaturedGaming} alt="" />
                    <h4>With savings up to 40% off! You don't want to miss these deals.</h4>
                    <p>Plus, with all xbox lines get 2 free games!</p>
                    <p>Shop now (add link in the future)</p>
                </div>
                <div className="deals-audio">
                    <img src={FeaturedAudio} alt="" />
                    <h4>Get up to 25% off select products!</h4>
                    <p>Big brands such as Sony, Panasonic, and many more!</p>
                    <p>Shop now (add link in the future).</p>
                </div>
                <div className="deals-small-appliances">
                    <img src={FeaturedSmallAppliances} alt="" />
                    <h4>Specials on small aplliances for the month of October!</h4>
                    <p>Financing deals on select appliances.</p>
                    <p>Shope now (add link in future)</p>
                </div>
                <div className="deals-small-health">
                    <img src={FeaturedHealth} alt="" />
                    <h4>Start saving big on select home health products!</h4>
                    <p>With products such as massage guns, massage chairs, and more!</p>
                    <p>Shop now (add link in the future) </p>
                </div>
            </div>
        </div>
    )
}