import React, { useContext } from "react";
import userContext from "../utilities/userContext";
const Footer = ()=>{
    const {user}=useContext(userContext);
    return(
    <div className="footer">This site is developed by <span className="font-bold">{user.name}</span> and email is <span className="font-bold">{user.email}</span></div>
    )
}
export default Footer;
