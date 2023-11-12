import TabGroup from "../TabGroup";
import ProductSizes from "./ProductSizes";
import RatingStars from "./RatingStars";
import ProductColorOptions from "./ProductColorOptions";


const ProductInfo = (props) => {
    const { name, label, description, sizes } = props.selectedProduct
    const { ratingValue, reviewsCount } = props.rating
    const brandDescription = props.brandDescription

    const tabsData = [
        {
            id: 'Info',
            content: description
        },
        {
            id: 'Brand',
            content: brandDescription
        },
        {
            id: 'Delivery',
            content: 'Delivery text here.'
        }
    ]

    return (
        <div className='product-info'>
            <div className='product-info__header'>
                <span className='label'>{label}</span>
                <button>
                    <img src='../assets/icons/add_to_favorite_pink.png' alt='add to favourites icon'/>
                </button>
            </div>
            <h1 className='name'>{name}</h1>

            <div className='product-info__rating'>
                <RatingStars isReadonly={true} ratingValue={ratingValue}/>
                <span className='product-info__reviews-count'>{reviewsCount} reviews</span>
            </div>

            <TabGroup tabsData={tabsData}/>

            <div className='product-info__options' >
                <ProductSizes sizes={sizes}/>
                <ProductColorOptions />
            </div>

        </div>
    )
}

export default ProductInfo