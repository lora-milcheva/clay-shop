import { useState, useEffect } from "react";
import { loadProductData } from "../data/ProductData";
import { useParams } from "react-router-dom";

const useProduct = () => {
    const { id } = useParams()

    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')

    const [productData, setProductData] = useState(null)
    const [selectedProduct, setSelectedProduct] = useState(null)

    const [selectedSize, setSelectedSize] = useState(null)


    useEffect(() => {
        (async () => {
            try {
                const response = await loadProductData(id)
                const data = response[0]
                setProductData(data)
                const product = data.products.filter(p => p.id === id)[0]
                setSelectedProduct(product)
            } catch (err) {
                setErrorMessage(err)
            }
        })()
    }, [id])


    useEffect(() => {
        if ((productData && selectedProduct) || errorMessage) {
            setIsLoading(false)
        }
    }, [productData, selectedProduct, errorMessage])

    const saveSelectedSize = (size) => {
        setSelectedSize(size)
    }

    const saveReview = (review) => {
        setProductData({
            ...productData,
            reviews: [review, ...productData.reviews]
        });
    }

    const calculateRating = () => {
        let rating = 0
        const reviews = productData?.reviews
        reviews.forEach(review => rating += Number(review.rating))

        return {
            ratingValue: rating / reviews.length,
            reviewsCount: reviews.length
        }
    }

    return {
        isLoading,
        errorMessage,
        setSelectedProduct,
        productData,
        setProductData,
        selectedProduct,
        calculateRating,
        selectedSize,
        saveSelectedSize,
        saveReview,
    }
}

export default useProduct