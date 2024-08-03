import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { menu } from "../utilities/helper";
import { addItem } from "../utilities/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const RestaurantMenu = () => {
  const params = useParams();

  const menuItems = menu;
  const dispatch = useDispatch();

  const addFoodItem = (data) => {
    dispatch(addItem(data));
  };
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="w-[80%] mx-auto ">
      <h1 className="text-xl font-bold mb-8">Restaurant id : {params.id} </h1>
      {/* <h1>{}</h1> */}
      <div className="grid grid-cols-4 gap-3">
        {menuItems.map((data) => (
          <ul className="m-1 bg-blue-50 p-4 h-[300px] border rounded-lg">
            <img
              src={`../assets/${data.image}`}
              className="h-[70%] w-full object-fill"
            />
            <div className="flex justify-between my-3">
              <div className="flex flex-col">
                <span>{data.dish}</span>
                <span>Rs. {data.price}/-</span>
              </div>
              <button
                onClick={() => addFoodItem(data)}
                className="bg-green-300 m-1 p-1 border rounded hover:bg-green-600"
              >
                Add
              </button>
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
