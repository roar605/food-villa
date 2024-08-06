import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utilities/cartSlice";
import { removeItem } from "../utilities/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const emptyCart = () => {
    dispatch(clearCart());
  };
  const remove = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <>
      <div className="flex gap-10 p-2 w-[80%] mx-auto">
        <h1 className="font-bold text-xl">Cart Items - {cartItems.length}</h1>
        <button
          onClick={() => emptyCart()}
          className="bg-red-300 p-2 rounded hover:bg-red-500"
        >
          Clear Cart
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4 w-[80%] mx-auto m-2">
        {cartItems.map((item) => (
          <ul className="border-4 h-[400px] m-2">
            <div className="">
              <img
                src={`../src/assets/${item.image}`}
                className="h-[300px] w-full object-fill"
              />
            </div>
            <span className=" text-xl font-semibold">{item.dish}</span>
            <button
              onClick={() => remove(item)}
              className="bg-red-300 w-10 mx-5 my-1 rounded hover:bg-red-500 "
            >
              {" "}
              -{" "}
            </button>
          </ul>
        ))}
      </div>
    </>
  );
};
export default Cart;
