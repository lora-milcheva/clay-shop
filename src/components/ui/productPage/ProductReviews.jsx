import AddReviewForm from "../../forms/AddReviewForm";
import ProductReviewCard from "./ProductReviewCard";
import useProduct from "../../../hooks/use-product";

const ProductReviews = () => {
    const { productData, saveReview } = useProduct()

    return (
        <div className='product__reviews'>
            <h2 className='heading-secondary'>Reviews</h2>

            <AddReviewForm saveReview={saveReview}/>

            <div className='reviews'>
                {productData?.reviews.map((el, index) => {
                    return <ProductReviewCard review={el} key={index + el.author + el.message}/>
                })}
            </div>
        </div>
    )
}

export default ProductReviews