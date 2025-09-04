import {useContext} from 'react';
import {cartContext} from '../context/CartContext';

export default function Checkout(){
    //taking the price and clear cart functions from the cart context
    const {totalPrice , clearCart} = useContext(cartContext);

    //when the person checks out we clear the cart and thank him
    const handleCheckout = () =>{
        alert('Thank you for your order!');
        clearCart();
    };
    return(
        <div className='p-6'>
            <h1 className='text-3xl font-bold mb-6'>Checkout</h1>
            <p>Total: ${totalPrice.toFixed(2)}</p>
            <button onClick={handleCheckout} className='bg-green-500 text-white px-4 py-2 mt-4 rounded-xl'>Confirm Order</button>

        </div>
    );
}