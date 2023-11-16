import { loadProducts } from "../../data/products-data"
import { useEffect, useState } from "react";
import ProductCard from "../ui/shopPage/ProductCard";
import Spinner from "../ui/Spinner";

const ShopPage = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')
    const [products, setProducts] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const response = await loadProducts()
                setProducts(response)
                setIsLoading(false)
            } catch (err) {
                setErrorMessage(err)
                console.log(err)
            }
        })()
    },[])


    if (isLoading) return <Spinner/>

    return (
        <div className='shop-page'>
            {errorMessage && <p className='error-text'>{errorMessage}</p> }
            {products?.map(el => <ProductCard product={el} key={el.id}/>)}
        </div>
    )
}

export default ShopPage