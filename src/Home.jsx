import ProductList from "./ProductList"
import TopDeals from "./assets/Home/topdealshome.png"
import Gaming from "./assets/Home/bestbuygaming.png"
import useFetch from "./useFetch"
export default function Home(){
    const {data: product, isPending, error} = useFetch("http://localhost:8000/products")
    return(
        // reformat this page so its more inline with bestbuy.ca site
        // add component 'pictures' that are like top deals or whatever, the square ones
        // under ^^ have a product showcase, laptops, tvs, monitors etc
        <div className="home">
            {/* {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {product && <ProductList products={product} title="Inventory" />} */}
            {/* have four different sized images, deals, about, gaming, and laptop that link to corresponding pages */}
            {/* gonna have to set a max width */}
            <img src={TopDeals} alt="" />
            <img src={Gaming} alt="" />
        </div>
    )
}