import { loadProducts } from "../../data/products-data"
import { useEffect, useState } from "react";
import ProductCard from "../ui/shopPage/ProductCard";
import Spinner from "../ui/Spinner";
import ScrollAnimation from 'react-animate-on-scroll';


const ShopPage = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')
    const [products, setProducts] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const response = await loadProducts()

                const shuffleArray = (array) => {
                    for (let i = array.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [array[i], array[j]] = [array[j], array[i]];
                    }
                }

                shuffleArray(response)
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
        <ScrollAnimation animateIn="fadeIn">
            <div className='shop-page'>
                <div className='shop-page__filters'>
                    Filters
                </div>

                <div className='shop-page__products'>
                    {errorMessage && <p className='error-text'>{errorMessage}</p> }
                    {products?.map(el => <ProductCard product={el} key={el.id}/>)}
                </div>

            </div>
        </ScrollAnimation>
    )
}

export default ShopPage