import TabGroup from "../TabGroup";
import ProductSizes from "./ProductSizes";
import RatingStars from "./RatingStars";
import ProductColorOptions from "./ProductColorOptions";


const ProductInfo = (props) => {
    const { id, name, label, description, sizes, price } = props.selectedProduct
    const { ratingValue, reviewsCount } = props.rating
    const  productData  = props.productData

    const tabsData = [
        {
            id: 'Info',
            content: description
        },
        {
            id: 'Brand',
            content: props.brandDescription
        },
        {
            id: 'Delivery',
            content: 'Delivery text here.'
        }
    ]


    const colorOptions = []
    productData.products.forEach(el => {
        colorOptions.push({
            color: el.colorHEX,
            id: el.id
        })
    })


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

            <div className='product-info__options'>
                <ProductSizes sizes={sizes}/>
                <ProductColorOptions colorOptions={colorOptions}
                                     selectedProductId={id}/>
            </div>

            <div className='product-info__footer'>
                <div className='product-info__price'>
                    ${Number(price).toFixed(2)}
                </div>
                <div className='product-info__cta'>
                    <button className='btn btn--primary'>Shop Now</button>
                    <button className='btn btn--default'>Add to cart</button>
                </div>
            </div>

        </div>
    )
}

export default ProductInfo