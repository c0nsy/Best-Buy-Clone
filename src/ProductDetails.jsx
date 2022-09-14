import { useParams} from "react-router-dom"
import useFetch from "./useFetch"
// import {Logo} from "./assets/soldandshippedbybestbuy.png"
export default function ProductDetails(){
    const {id} = useParams()
    const {data: product, error, isPending} = useFetch("http://localhost:8000/products/" + id)
    return(
        <div className="product-details">
            {console.log("hello")}
            {isPending && <div>Loading...</div> }
            {error && <div>{error}</div> }
            {product && (
                // specific product details
                <article className="product-details">
                    <h2 className="product-title">{product.title}</h2>
                    <hr className="product-hr"/>
                    <div className="product-wrapper">
                        <div className="product-container">
                            <img className="product-image" src={product.image}/>
                            <div className="product-overview">
                                <h4>Overview</h4>
                                <p>{product.overview}</p>
                            </div>
                        </div>
                        {/* Button for checkout */}
                        <div className="product-interactive">
                            <h1 className="product-price">Price : {product.price}</h1>
                            <div className="button-container">
                                <div className="button-wrapper">
                                    <button className="add-checkout--button">Add to Cart</button>
                                    <button className="pickup-instore--button">Pick Up at Store</button>
                                    {/* <img src={Logo} /> */}
                                    <h3>Available to Ship!</h3>
                                    {product.quantity  > 0 ?<h4>There are: {product.quantity} left.</h4> : <h4>Out of Stock</h4>}
                                </div>
                            </div>
                        </div>
                    </div>
                        
                    
                    
                </article>
            )}
        </div>
    )
}
