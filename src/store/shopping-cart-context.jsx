import { createContext, useContext, useEffect, useState } from "react";


// Add default values to be able to use suggestion on import
export const ShoppingCartContext = createContext({
    getItemQuantity: () => {
    },
    increaseItemQuantity: () => {
    },
    decreaseItemQuantity: () => {
    },
    removeFromCart: () => {
    },
    numberOfProductsInCart: Number
})

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        console.log(cartItems)
    }, [cartItems])


    const numberOfProductsInCart = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0 // default value
    )

    const getItemQuantity = (id) => {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    const addToCart = (id, size) => {
        setCartItems([...cartItems, { id, size, quantity: 1 }])
    }


    const increaseItemQuantity = (id, size) => {

        const productIndex = cartItems.findIndex(el => el.id === id && el.size === size)
        console.log(productIndex)
        console.log(size)

        if (productIndex < 0) {
            addToCart(id, size)
        } else {
            setCartItems(currItems => {
                return currItems.map(item => {
                    if (item.size === size && item.id === id) {
                        return {...item, quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                })
            })
        }
    }

    const decreaseItemQuantity = (id) => {
        setCartItems(currItems => {
            // Check if item quantity is 1, if so - remove it from cart, else decrease by 1
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const removeFromCart = (id) => {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    return (
        <ShoppingCartContext.Provider value={{
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

