import ProductList from "./ProductList"
import useFetch from "./useFetch"
export default function Home(){
    const {data: product, isPending, error} = useFetch("http://localhost:8000/products")
    return(
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {product && <ProductList products={product} title="Inventory" />}
        </div>
    )
}