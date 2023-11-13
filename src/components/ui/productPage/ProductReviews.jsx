import AddReviewForm from "../../forms/AddReviewForm";
import ProductReviewCard from "./ProductReviewCard";

const ProductReviews = (props) => {
    const { reviews } = props

    return (
        <div className='product__reviews'>
            <h2 className='heading-secondary'>Reviews</h2>

            <AddReviewForm/>

            <div className='reviews'>
                {reviews.map(el => <ProductReviewCard review={el} key={el.author + el.text}/>)}
            </div>
        </div>
    )
}

export default ProductReviews