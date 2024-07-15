import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { menu } from "../utilities/helper";
import { addItem } from "../utilities/cartSlice";
import { useDispatch, useSelector } from "react-redux";


const RestaurantMenu=()=>{
    const params=useParams();

    const menuItems=menu;
    const dispatch=useDispatch();

    const addFoodItem = (data)=>{
        dispatch(addItem(data));
    }
    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems);
    return( 
        <div>
            
            <h1>Restaurant id : {params.id} </h1>
            {/* <h1>{}</h1> */}
            <div>
                {menuItems.map((data)=><ul className="m-1 p-2">{data}
                <button 
                onClick={()=>addFoodItem(data)} className="bg-pink-300 m-1 p-1 border rounded hover:bg-pink-600">Add</button></ul>)}
            </div>
        </div>
    )
}
export default RestaurantMenu;