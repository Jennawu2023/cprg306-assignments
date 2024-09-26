"use client";

import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
     };
    
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
     };
    
    return (
        <div className="p-2 m-4 bg-white text-white w-36">
            <div className="flex justify-between">
                <p className="text-black">{quantity} </p>
                <div className="flex">
                   <button onClick={decrement} className=" w-8 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 disabled:bg-gray-400" disabled={quantity <= 1}>-</button>
                   <button onClick={increment} className="ml-1 w-8 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 disabled:bg-gray-400" disabled={quantity >= 20}>+</button>
                </div>
            </div>
            
        </div>
    )
}