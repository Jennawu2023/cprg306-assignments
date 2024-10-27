"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");
    

    const handleSubmit = (event) => {
        event.preventDefault();

        const id = Math.random().toString(36).substring(2, 9);
        const item = { id, name, quantity, category }; 
        

        onAddItem(item);

        setName("");
        setQuantity(1);
        setCategory("produce");
    };
    
    
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
        
        <div className="flex  ml-5 w-full">
            <form className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full" onSubmit={(event)=> handleSubmit(event)}>
                <div className="mb-2">
                  <input
                    type="text"
                    id="name"
                    placeholder="Item Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                    className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg bg-white"
                  />
                </div>
                
                <div className="flex justify-between ">
                    <div className="p-2 mt-1 mb-1 rounded-md bg-white text-white w-36">
                        <div className="flex justify-between">
                          <p className="text-black">{quantity} </p>
                          <div className="flex">
                             <button type="button" onClick={decrement} className=" w-8 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 disabled:bg-gray-400" disabled={quantity <= 1}>-</button>
                             <button type="button" onClick={increment} className="ml-1 w-8 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 disabled:bg-gray-400" disabled={quantity >= 20}>+</button>
                          </div>
                        </div>
                    </div>
                    <select 
                       id="category"
                       value={category}
                       onChange={(event) => setCategory(event.target.value)}
                       className="ml-1 border-2 border-gray-300 p-2 rounded-lg bg-white text-black">
                       <option value disabled>Category</option>
                       <option value="produce">Produce</option>
                       <option value="dairy">Dairy</option>
                       <option value="bakery">Bakery</option>
                       <option value="meat">Meat</option>
                       <option value="frozen">Frozen Foods</option>
                       <option value="canned">Canned Goods</option>
                       <option value="dry">Dry Goods</option>
                       <option value="beverages">Beverages</option>
                       <option value="snacks">Snacks</option>
                       <option value="household">Household</option>
                       <option value="other">Other</option>
                    </select>
                </div>
                
                <button 
                  type="submit"
                  className="w-full mt-4 py-2 px-4 p-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700"> + </button>
            </form>
        </div>
            
            
       
    )
}