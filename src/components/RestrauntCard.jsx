import React from "react";


const RestrauntCard=(props)=>{
    return(
        <div className="my-4 card w-60 mx-auto p-2 h-[450px] rounded-xl shadow-lg bg-blue-200 hover:bg-blue-500">
            <img className="h-[55%] w-full" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
             +props.rest.cloudinaryImageId}/>
            <h2 className="font-bold text-lg">{props.rest.name}</h2>            
            <h3 className="py-2 my-2 ">{props.rest.cuisines.join(", ")}</h3>
            <h4 className="text-red-500 font-bold">4.2 stars</h4>
        </div>
    );
};
export default RestrauntCard;