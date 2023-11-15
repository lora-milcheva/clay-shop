import TabGroup from "../TabGroup";
import ProductSizes from "./ProductSizes";
import RatingStars from "./RatingStars";
import ProductColorOptions from "./ProductColorOptions";
import { useShoppingCart } from "../../../store/shopping-cart-context";
import { useState } from "react";
import useProduct from "../../../hooks/use-product";


const ProductInfo = (props) => {
    const { increaseItemQuantity, decreaseItemQuantity, removeFromCart, openCart } = useShoppingCart()

    const { selectedSize, saveSelectedSize } = useProduct()

    const { selectedProduct, productData, rating } = props
    const { id, name, label, description, sizes, price, colorHEX, images } = selectedProduct
    const { ratingValue, reviewsCount } = rating

    const [errorMessage, setErrorMessage] = useState('')


    const tabsData = [
        {
            id: 'Info',
            content: description
        },
        {
            id: 'Brand',
            content: productData.brandDescription
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

    const availableSizes = sizes.map(el => Object.keys(el)[0])

    const handleAddToCartClick = () => {
        if (!selectedSize || !availableSizes.includes(selectedSize)) {
            setError()
            return
        }

        increaseItemQuantity(id, name, selectedSize, colorHEX, images[0] )
        openCart()
    }

    const setError = () => {
        setErrorMessage('Please select your size.')
        setTimeout(() => {
            setErrorMessage('')
        }, 2000)
    }


    return (
        <div className='product-info'>
            <div className='product-info__header'>
                <span className='label'>{label}</span>
                <button>
                    <img src='../assets/icons/add_to_favorite_pink.png' alt='add to favourites icon'/>
                </button>
            </div>
            <h1 className='heading primary name'>{name}</h1>

            <div className='product-info__rating'>
                <RatingStars isReadonly={true}
                             ratingValue={ratingValue}
                             allowFraction={true}/>
                <span className='product-info__reviews-count'>{reviewsCount} reviews</span>
            </div>

            <TabGroup tabsData={tabsData}/>

            <div className='product-info__options'>
                <ProductSizes availableSizes={availableSizes} selectedSize={selectedSize}
                              saveSelectedSize={saveSelectedSize}/>
                <ProductColorOptions colorOptions={colorOptions}
                                     selectedProductId={id}/>
            </div>

            {errorMessage && <div className='error-text'>{errorMessage}</div>}

            <div className='product-info__footer'>
                <div className='product-info__price'>
                    ${Number(price).toFixed(2)}
                </div>
                <div className='product-info__cta'>
                    <button className='btn btn--primary' onClick={() => decreaseItemQuantity(id, selectedSize)}>
                        Shop Now
                    </button>
                    <button className='btn btn--default' onClick={handleAddToCartClick}>
                        Add to cart
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ProductInfo