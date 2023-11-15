import { useShoppingCart } from "../../../store/shopping-cart-context";

const CartItem = (props) => {
    const { id, name, size, quantity, colorHEX, imageUrl } = props.item
    const { increaseItemQuantity, decreaseItemQuantity, removeFromCart, openCart } = useShoppingCart()


    return (
        <div className='cart__item'>
            <div className='cart__item--image'>
                <img src={imageUrl}/>
            </div>
            <div className='cart__item--info'>
                <p className='cart__item--name'>{name}</p>
                <p className='cart__item--size'>Size: {size}</p>
                <p>Color: <span className='cart__item--color' style={{ backgroundColor: colorHEX }}/></p>
            </div>
            <div className='cart__item--controls'>
                <button className='btn btn--default'
                        onClick={() => decreaseItemQuantity(id, size)}>-
                </button>
                {quantity}
                <button className='btn btn--default'
                        onClick={() => increaseItemQuantity(id, size)}>+</button>
            </div>

        </div>
    )
}

export default CartItem