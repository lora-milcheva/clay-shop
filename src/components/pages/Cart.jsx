import TabGroup from "../ui/TabGroup";
import { useShoppingCart } from "../../store/shopping-cart-context";
import CartItem from "../ui/cart/CartItem";
import { useEffect } from "react";

const cartTabsData = [
    {
        id: 'Cart',
        content: null
    },
    {
        id: 'Checkout',
        content: null
    },
    {
        id: 'Shipping',
        content: null
    },
    {
        id: 'Done',
        content: null
    }
]


const Cart = () => {
    const { isOpen, closeCart, cartItems, totalPrice } = useShoppingCart()

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen])

    const isEmpty = cartItems.length === 0

    if (!isOpen) return

    return (
        <div className='cart'>
            <div className='cart__backdrop'/>

            <div className='cart__content'>
                <TabGroup tabsData={cartTabsData}/>

                {isEmpty
                    ? <p className='cart__message'>Your cart is empty!</p>
                    : <>
                        {cartItems.map(item => <CartItem item={item} key={item.id + item.size}/>)}
                        <div className='cart__total'>
                            <p>Total amount: $ <strong>{totalPrice.toFixed(2)}</strong></p>
                        </div>
                    </>
                }

                <div className='cart__footer'>
                    <button className='btn btn--default' onClick={closeCart}>To shop</button>
                    <button className='btn btn--primary' disabled={isEmpty}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Cart