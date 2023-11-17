import { useShoppingCart } from "../../../store/shopping-cart-context";
import { IoIosAdd, IoIosRemove, IoIosClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


const CartItem = (props) => {
    const { id, name, size, quantity, color, image, price } = props.item
    const { increaseItemQuantity, decreaseItemQuantity, removeFromCart, openCart, closeCart } = useShoppingCart()

    const navigate = useNavigate()

    const handleClick = () => {
        closeCart()
        navigate('/shop/' + id)
    }

    return (
        <div className='cart-item'>

            <div className='cart-item__image' onClick={handleClick}>
                <img src={image}/>
            </div>

            <div className='cart-item__info'>
                <p className='cart-item__name'>{name}</p>
                <p className='cart-item__size'>Size: <label>{size}</label></p>
                <p className='cart-item__color'>Color: <span style={{ backgroundColor: color }}/></p>
            </div>

            <div className='cart-item__controls'>
                <button className='btn btn--default md'
                        onClick={() => decreaseItemQuantity(id, size)}>
                    <IoIosRemove/>
                </button>
                <span className='cart-item__quantity'>{quantity}</span>

                <button className='btn btn--default md'
                        onClick={() => increaseItemQuantity({ id, size })}>
                    <IoIosAdd/>
                </button>
            </div>

            <div className='cart-item__price'>
                <p>${(price * quantity).toFixed(2)}</p>
            </div>

            <div className='cart-item__remove'>
                <button className='btn btn--default' onClick={() => removeFromCart(id, size)}>
                    <IoIosClose/>
                </button>
            </div>
        </div>
    )
}

export default CartItem