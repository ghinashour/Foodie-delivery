import React , {Children, creatContext, useState} from 'react';

export const CartContext = creatContext();

export const CartProvider = ({ Children }) =>{
    //creating an empty cart state array that will update the state of the cart
    const [cart, setCart] = useState([]);

    const addToCart = (item) =>{
        //see if the item already exists in the cart or not
        const exists = cart.find(cartitem => cartitem.id  === item.id);
        if (exists){
            //if the item already exists in the cart update it's quantity 
            setCart(cart.map(cartitem => 
                cartitem.id === item.id ? {...cartitem , quantity: cartitem.quantity + 1}: cartitem
             ));
        }else{
            setCart([...cart , {...item, quantity : 1}]);
        }
    };

    //removing the item by filtering the cart --> the items that has id different from the current id will be mapped 
    const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));
    const clearCart = () => setCart([]);
    //using the reduce function that combines all the items in the array into a single value, starting with the acc set to zero and adding the price of the rest of the items
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )

}