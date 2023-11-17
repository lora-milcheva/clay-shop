const ProductSizes = (props) => {
    const { availableSizes, selectedSize, saveSelectedSize, clearError } = props

    const handleClick = (el) => {
        clearError()
        saveSelectedSize(el)

    }

    return (
        <div className='sizes'>
            <div className='sizes__header'>
                <p>Size</p>
                <button>Size Guide</button>
            </div>

            <div className='sizes__options'>
                {availableSizes.map(el =>
                    <button onClick={() => handleClick(el)}
                            key={el}
                            className={selectedSize === el ? 'btn btn--primary' : 'btn btn--default'}>
                        {el}
                    </button>)}
            </div>
        </div>
    )
}

export default ProductSizes