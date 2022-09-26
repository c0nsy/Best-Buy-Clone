import ProductList from "./ProductList"
import useFetch from "./useFetch"
export default function Home(){
    const {data: product, isPending, error} = useFetch("http://localhost:8000/products")
    return(
        // reformat this page so its more inline with bestbuy.ca site
        // add component 'pictures' that are like top deals or whatever, the square ones
        // under ^^ have a product showcase, laptops, tvs, monitors etc
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {product && <ProductList products={product} title="Inventory" />}
        </div>
    )
}