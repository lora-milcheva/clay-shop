import Spinner from "../ui/Spinner";
import ProductInfo from "../ui/productPage/ProductInfo";
import ProductGallery from "../ui/productPage/ProductGallery";
import ProductReviews from "../ui/productPage/ProductReviews";
import useProduct from "../../hooks/use-product";


const ProductPage = () => {
    const {
        isLoading,
        errorMessage,
        selectedProduct,
        productData,
        calculateRating,
        saveReview
    } = useProduct()


    if (isLoading) return <Spinner/>
    if (errorMessage) return <p>{errorMessage}</p>

    return (
        <div className='product'>
            <div className='product__data'>
                <ProductGallery images={selectedProduct.images}/>
                <ProductInfo selectedProduct={selectedProduct}
                             productData={productData}
                             rating={calculateRating()}/>
            </div>

            <ProductReviews reviews={productData.reviews} saveReview={saveReview}/>

        </div>
    )
}

export default ProductPage