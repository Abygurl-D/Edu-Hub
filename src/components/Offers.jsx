import React from "react";
import K from "../constants/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Offers = () => {
  return <div className="grid grid-cols-3 w-3/5 mx-auto my-20 gap-12">
    {
    K.OFFERS.map((offer, index) => {
console.log(`${index}: ${offer.text}`);
return (
<div key={index} className="flex flex-col gap-y-4">
    <span className="p-2 bg-black w-fit text-white  text-3xl rounded-full"><FontAwesomeIcon icon ={offer.icon}/>
    </span>
    <h3 className="text-2xl font-semibold">{offer.text}</h3>
    <p>{offer.description}</p>
</div>)
    })
    }
    </div>;
};

export default Offers;
