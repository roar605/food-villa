import React, { useState,useContext } from "react"
import { Link } from "react-router-dom";
import userContext from "../utilities/userContext";
import { useSelector } from "react-redux";

export const Title = ()=>{return(
    <h1 className="h-28 p-2">Food Villa</h1>
)};
const loggedIn=()=>{
    return false;
}
const Header = ()=>{
    const [logIn,setLogIn]=useState(false);

    const {user} =useContext(userContext)
    const cartItems = useSelector(store=>store.cart.items)

    return(
        <div className="flex justify-between bg-pink-100">
            <Title/>
            <div className="nav-items">
                <ul className="flex py-10">
                    <li className="px-3 hover:font-bold"><Link to="/">Home</Link></li>
                    <li className="px-2 hover:font-bold"><Link to="/about">About Us</Link></li>
                    <li className="px-2 hover:font-bold"><Link to="/contact">Contact</Link></li>
                    <li className="px-2 hover:font-bold"><Link to="/instamart">Instamart</Link></li>
                    <li className="px-2 hover:font-bold"><Link to="/cart">Cart - {cartItems.length} items</Link></li>
                    
                </ul>
            </div>
            <div className="login">
                {logIn?<button className="bg-red-300 p-5 m-5" onClick={()=>setLogIn(false)}>Log Out</button>:<button className="bg-red-300 p-5 m-5" onClick={()=>setLogIn(true)}>{user.name} Log In</button>}</div>
            
        </div>
    )
}
export default Header;
