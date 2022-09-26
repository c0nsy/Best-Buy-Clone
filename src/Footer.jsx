
export default function Footer(){
    return(
        <div className="footer">
            <div className="footer--wrapper">
                <div className="footer-customer-support">
                    <h4>Customer Support</h4>
                    {/* below should be links (all p tags) - implement in the future */}
                    <p>Contact Us</p>
                    <p>Help Center</p>
                    <p>Return Policy</p>
                    <p>Gift Cards</p>
                </div>
                <div className="footer-services">
                    <h4>Services</h4>
                    <p>Geek-Squad</p>
                    <p>Electronic Recycling</p>
                    <p>In-Home Adviser</p>
                    <p>Trade-In Policy</p>
                </div>
                <div className="footer-about-us">
                    <h4>About Us</h4>
                    <p>Resume</p>
                    <p>Project Details</p>
                    <p>Social Media</p>
                    <p>Summary</p>
                </div>
            </div>
        </div>
    )
}