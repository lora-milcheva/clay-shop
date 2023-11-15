import TabGroup from "../ui/TabGroup";
import { useShoppingCart } from "../../store/shopping-cart-context";
import CartItem from "../ui/cart/CartItem";

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
    const { isOpen, closeCart, cartItems } = useShoppingCart()
    console.log(isOpen)

    const renderTabContent = () => {

    }

    if (!isOpen) return

    return (
        <div className='cart'>
            <div className='cart__backdrop'/>

            <div className='cart__content'>
                <TabGroup tabsData={cartTabsData}/>

                {cartItems.map(item=> <CartItem item={item} key={item}/>)}

                <div className='cart__footer'>
                    <button className='btn btn--default' onClick={closeCart}>To shop</button>
                    <button className='btn btn--primary'>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Cart