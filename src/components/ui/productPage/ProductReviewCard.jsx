import RatingStars from "./RatingStars";

const ProductReviewCard = (props) => {

    const { review } = props

    return (
        <div className='review-card'>
            <h4 className='review-card__author'>
                {review.author}&nbsp;
                <span>&#60;{review.email}&#62;</span>
            </h4>

            <RatingStars isReadonly={true}
                         ratingValue={review.rating}/>

            <p className='review-card__text'>{review.text}</p>
        </div>
    )
}

export default ProductReviewCard