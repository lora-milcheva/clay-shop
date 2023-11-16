import { useShoppingCart } from "../../../store/shopping-cart-context";

const CartItem = (props) => {
    const { id, name, size, quantity, color, image, price } = props.item
    const { increaseItemQuantity, decreaseItemQuantity, removeFromCart, openCart } = useShoppingCart()

    return (
        <div className='cart-item'>
            <div className='cart-item__image'>
                <img src={image} />
            </div>

            <div className='cart-item__info'>
                <p className='cart-item__name'>{name}</p>
                <p className='cart-item__size'>Size: <label>{size}</label></p>
                <p>Color: <span className='cart-item__color' style={{ backgroundColor: color }}/></p>
            </div>

            <div className='cart-item__controls'>
                <button className='btn btn--default md'
                        onClick={() => decreaseItemQuantity(id, size)}>-
                </button>
                <span className='cart-item__quantity'>{quantity}</span>

                <button className='btn btn--default md'
                        onClick={() => increaseItemQuantity({ id, size })}>+</button>
            </div>

            <div className='cart-item__price'>
                <p>${(price * quantity).toFixed(2)}</p>
            </div>

            <div className='cart-item__remove'>
                <button className='btn btn--default xs' onClick={() => removeFromCart(id, size)}>
                    X
                </button>
            </div>
        </div>
    )
}

export default CartItem