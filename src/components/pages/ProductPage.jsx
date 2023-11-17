import Spinner from "../ui/Spinner";
import ProductInfo from "../ui/productPage/ProductInfo";
import ProductGallery from "../ui/productPage/ProductGallery";
import ProductReviews from "../ui/productPage/ProductReviews";
import useProduct from "../../hooks/use-product";
import ProductHeader from "../ui/productPage/ProductHeader";
import ScrollAnimation from 'react-animate-on-scroll';


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
        <ScrollAnimation animateIn="fadeIn">
            <div className='product-page product'>
                <div className='product__data'>

                    <ProductHeader selectedProduct={selectedProduct} rating={calculateRating()}/>

                    <ProductGallery images={selectedProduct.images}/>

                    <ProductInfo selectedProduct={selectedProduct}
                                 productData={productData}/>
                </div>

                <ProductReviews reviews={productData.reviews} saveReview={saveReview}/>

            </div>
        </ScrollAnimation>
    )
}

export default ProductPage