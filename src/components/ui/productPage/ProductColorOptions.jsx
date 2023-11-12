import useProduct from "../../../hooks/useProduct";
import { useNavigate } from 'react-router-dom';

const ProductColorOptions = () => {
    const { productData } = useProduct()
    const navigate = useNavigate();

    const colorOptions = []

    productData?.products.forEach(el => {
        colorOptions.push({
            color: el.colorHEX,
            id: el.id
        })
    })

    return (
        <div className='color-options'>
            {colorOptions.map(el => {
                return <button className='btn'
                               onClick={() => navigate("/product/" + el.id)}
                               style={{ backgroundColor: el.color, display: 'inline-block' }}
                               key={el.color}/>
            })}
        </div>
    )
}

export default ProductColorOptions