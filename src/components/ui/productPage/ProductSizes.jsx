import useProduct from "../../../hooks/useProduct";

const ProductSizes = ({ sizes }) => {
    const { selectedSize, saveSelectedSize } = useProduct()
    const availableSizes = sizes.map(el => Object.keys(el)[0])

    return (
        <div className='sizes'>
            <div className='sizes__header'>
                <p>Size</p>
                <button>Size Guide</button>
            </div>

            <div className='sizes__options'>
                {availableSizes.map(el =>
                    <button onClick={() => saveSelectedSize(el)}
                            className={selectedSize === el ? 'btn btn--primary' : 'btn btn--default'}
                            key={el}>
                        {el}
                    </button>)}
            </div>
        </div>
    )
}

export default ProductSizes