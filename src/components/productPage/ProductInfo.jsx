import Rating from "../common/Review";


const ProductInfo = (props) => {
    const { name, label, description } = props.selectedProduct
    const ratingValue = props.ratingValue

    return (
        <div className='product-info'>
            <div className='product-info__header'>
                <span className='label'>{label}</span>
                <button>
                    <img src='../assets/icons/add_to_favorite_pink.png' alt='add to favourites icon'/>
                </button>
            </div>
            <h1 className='name'>{name}</h1>

            <Rating isReadonly={true} ratingValue={ratingValue}/>

            <p>{description}</p>
        </div>
    )
}

export default ProductInfo