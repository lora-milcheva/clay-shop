import RatingStars from "./RatingStars";

const ProductHeader = (props) => {
    const { selectedProduct, rating } = props
    const { name, label, } = selectedProduct
    const { ratingValue, reviewsCount } = rating


    return (
        <div className='product-header'>
            <div className='product-header__top'>
                <span className='label'>{label}</span>
                <button>
                    <img src='../assets/icons/add_to_favorite_pink.png' alt='add to favourites icon'/>
                </button>
            </div>

            <h1 className='heading-primary name'>{name}</h1>

            <div className='product-info__rating'>
                <RatingStars isReadonly={true}
                             ratingValue={ratingValue}
                             allowFraction={true}/>
                <span className='product-info__reviews-count'>{reviewsCount} reviews</span>
            </div>
        </div>
    )
}

export default ProductHeader