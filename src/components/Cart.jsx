import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utilities/cartSlice";
import { removeItem } from "../utilities/cartSlice";

const Cart=()=>{
    const cartItems = useSelector(store=>store.cart.items)
    const dispatch=useDispatch();
    const emptyCart = ()=>{
        dispatch(clearCart())
    }
    const remove=(item)=>{
        dispatch(removeItem(item))
    }

    return(
        <>
        <div className="flex gap-10 p-2">
            <h1 className="font-bold text-xl">Cart Items - {cartItems.length}</h1>
            <button
            onClick={()=>emptyCart()} className="bg-red-300 p-2 rounded hover:bg-red-500">Clear Cart</button>
        </div>
        {cartItems.map(item=><ul>{item}<button 
        onClick={()=>remove(item)} className="bg-red-300 w-10 mx-5 my-1 rounded hover:bg-red-500 "> - </button></ul>)}
        </>
    )
}
export default Cart;