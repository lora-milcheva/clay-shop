import Spinner from "../ui/Spinner";
import ProductInfo from "../ui/productPage/ProductInfo";
import ProductGallery from "../ui/productPage/ProductGallery";
import ProductReviews from "../ui/productPage/ProductReviews";
import useProduct from "../../hooks/useProduct";


const ProductPage = () => {
    const {
        isLoading,
        errorMessage,
        selectedProduct,
        selectedSize,
        calculateRating,
        productData
    } = useProduct()


    if (isLoading) return <Spinner/>
    if (errorMessage) return <p>{errorMessage}</p>

    return (
        <div className='product'>
            <div className='product__data'>
                <ProductGallery images={selectedProduct.images}/>
                <ProductInfo selectedProduct={selectedProduct}
                             selectedSize={selectedSize}
                             rating={calculateRating()}
                             productData={productData}/>
            </div>

            <ProductReviews reviews={productData.reviews}/>

        </div>
    )
}

export default ProductPage