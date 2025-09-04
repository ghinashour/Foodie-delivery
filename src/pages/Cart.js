import {useContext} from 'react';
import { CartContext } from '../context/CartContext';
import {Link} from 'react-router-dom';
//this is a react router component to use it : npm install react-router-dom

export default function Cart(){
    const {cart, totalPrice, removeFromCart} =useContext(CartContext);
    //usecontxt is a react hook  .\ usecontext(cartContext) let you acess shared state and functions from anywhere
    //cartcontext is a context object created earlier using createcontext
    //we are destructuring three values here
    return(
         <div className="p-6">
              <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
              {cart.length === 0 ? (
                <p>Your cart is empty. <Link to="/menu" className="text-green-500">Go to Menu</Link></p>
              ) : (
                <div>
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between items-center border-b py-2">
                      <span>{item.name} (x{item.quantity})</span>
                      <div>
                        <span className="mr-4">${item.price * item.quantity}</span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="text-right mt-6">
                    <h2 className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</h2>
                    <Link to="/checkout" className="bg-green-500 text-white px-4 py-2 mt-4 inline-block rounded-xl">
                      Proceed to Checkout
                    </Link>
                  </div>
                </div>
              )}
            </div>
    );
}
