import { useNavigate } from 'react-router-dom';

const ProductColorOptions = ( props ) => {
    const navigate = useNavigate();
    const {colorOptions , selectedProductId} = props

    return (
        <div className='colors'>
            <p className='colors__header'>Color</p>
            <div className='colors__options'>
                {colorOptions.map(el => {
                    return <button className={el.id === selectedProductId ? "color-option selected" : "color-option"}
                                   onClick={() => navigate("/product/" + el.id)}
                                   style={{ backgroundColor: el.color }}
                                   key={el.color}/>
                })}
            </div>
        </div>
    )
}

export default ProductColorOptions