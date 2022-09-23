import {Link} from "react-router-dom"
import Laptop1 from "./assets/LaptopImages/LenovoLaptop1.png"
export default function ProductList({products,title}){
    return(
        <div className="product-list">
            <h2>{title}</h2>
            {/* could maybe use filter by tag to filter out each product(?) */}
            {/* filters like, laptop, mice, desktop, laptop cases, etc */}
            {products.map((product) =>
                
                    <div className="product-preview" key={product.id}>
                        <h1>{product.title}</h1>
                        <Link to = {`/products/${product.id}`} className="preview-link">
                            <img src={product.image} alt="" />
                        </Link>
                    </div>
            )}
        </div>
    )
}