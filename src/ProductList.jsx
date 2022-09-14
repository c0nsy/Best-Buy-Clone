import {Link} from "react-router-dom"
export default function ProductList({products,title}){
    return(
        <div className="product-list">
            <h2>{title}</h2>
            {/* could maybe use filter by tag to filter out each product(?) */}
            {/* filters like, laptop, mice, desktop, laptop cases, etc */}
            {products.map((product) =>
                <Link to = {`/products/${product.id}`}>
                    <div className="product-preview" key={product.id}>
                        <h1>{product.title}</h1>
                    </div>
                </Link>
                
            )}
        </div>
    )
}