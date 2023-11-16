import TabGroup from "../TabGroup";
import ProductSizes from "./ProductSizes";
import ProductColorOptions from "./ProductColorOptions";
import { useShoppingCart } from "../../../store/shopping-cart-context";
import { useState } from "react";
import useProduct from "../../../hooks/use-product";


const ProductInfo = (props) => {
    const { increaseItemQuantity, decreaseItemQuantity, openCart } = useShoppingCart()

    const { selectedSize, saveSelectedSize } = useProduct()

    const { selectedProduct, productData } = props
    const { id, name, description, sizes, price, colorHEX, images } = selectedProduct

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

        const item = {
            id, size: selectedSize, name, color: colorHEX, image: images[0], price
        }

        increaseItemQuantity(item)
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
                    <button className='btn btn--primary' onClick={() => decreaseItemQuantity( id, selectedSize )}>
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