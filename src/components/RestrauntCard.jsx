import React from "react";


const RestrauntCard=(props)=>{
    return(
        <div className="card w-60 p-2 m-2 shadow-lg bg-pink-100 hover:bg-pink-500">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
             +props.rest.cloudinaryImageId}/>
            <h2 className="font-bold">{props.rest.name}</h2>            
            <h3>{props.rest.cuisines.join(", ")}</h3>
            <h4>4.2 stars</h4>
        </div>
    );
};
export default RestrauntCard;