import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { loadData } from "../data/ProductInfo";

import Spinner from "../components/common/Spinner";
import ProductInfo from "../components/productPage/ProductInfo";
import ProductGallery from "../components/productPage/ProductGallery";
import ProductReviews from "../components/productPage/ProductReviews";


const ProductPage = () => {
    const { id } = useParams()

    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')

    const [productData, setProductData] = useState(null)
    const [selectedProduct, setSelectedProduct] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                const response = await loadData(id)
                const data = response[0]
                setProductData(data)
                const product = data.products.filter(p => p.id === id)[0]
                setSelectedProduct(product)
            } catch (err) {
                setErrorMessage(err)
            }
            setIsLoading(false)
        })()
    }, [id])


    if (isLoading) return <Spinner/>
    if (errorMessage) return <p>{errorMessage}</p>

    const { reviews, brandDescription } = productData

    const calculateRating = () => {
        let rating = 0
        reviews.forEach(review => {
            rating += Number(review.rating)
        })

        return rating / reviews.length
    }

    return (
        <div className='product'>
            <div className='product__data'>
                <ProductGallery images={selectedProduct.images}/>
                <ProductInfo selectedProduct={selectedProduct} brandDescription={brandDescription} ratingValue={calculateRating()}/>
            </div>

            <ProductReviews reviews={reviews}/>
        </div>
    )
}

export default ProductPage