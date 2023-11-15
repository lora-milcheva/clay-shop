import { createContext, useContext, useEffect, useState } from "react";


// Add default values to be able to use suggestion on import
export const ShoppingCartContext = createContext({
    cartItems: [],
    openCart: () => {},
    closeCart: () => {},
    getItemQuantity: () => {},
    increaseItemQuantity: () => {},
    decreaseItemQuantity: () => {},
    removeFromCart: () => {},
    numberOfProductsInCart: Number
})

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        console.log(cartItems)
    }, [cartItems])


    const numberOfProductsInCart = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0 // default value
    )

    const openCart = () => setIsOpen(true)

    const closeCart = () => setIsOpen(false)

    const getItemQuantity = (id) => {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    const getProductIndex = (id, size) => {
        return cartItems.findIndex(el => el.id === id && el.size === size)
    }

    const checkProduct = (item, id, size) => {
        return item.size === size && item.id === id
    }

    const addToCart = (item) => {
        setCartItems([...cartItems, { ...item,  quantity: 1 }])
    }

    const increaseItemQuantity = (item) => {
        const { id, size } = item
        const productIndex = getProductIndex(id, size)

        if (productIndex < 0) {
            addToCart(item)
        } else {
            setCartItems(currItems => {
                return currItems.map(el => {
                    if (checkProduct(el, id, size)) {
                        return { ...el, quantity: el.quantity + 1 }
                    } else {
                        return el
                    }
                })
            })
        }
    }

    const decreaseItemQuantity = (id, size) => {
        const productIndex = getProductIndex(id, size)

        if (productIndex < 0) return

        if (cartItems[productIndex].quantity === 1) {
            setCartItems(currItems => {
                return currItems.filter((el, index) => index !== productIndex)
            })
        } else {
            setCartItems(currItems => {
                return currItems.map(item => {
                    if (checkProduct(item, id, size)) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            })
        }
    }

    const removeFromCart = (id, size) => {
        const productIndex = getProductIndex(id, size)

        setCartItems(currItems => {
            return currItems.filter((el, index) => index !== productIndex)
        })
    }

    return (
        <ShoppingCartContext.Provider value={{
            isOpen,
            cartItems,
            openCart,
            closeCart,
            getItemQuantity,
            increaseItemQuantity,
            decreaseItemQuantity,
            removeFromCart,
            numberOfProductsInCart
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}


