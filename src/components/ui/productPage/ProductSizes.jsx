
const ProductSizes = (props) => {
    const { availableSizes, selectedSize, saveSelectedSize } = props

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