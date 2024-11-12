"use client";

import Item from "./item";
import {useState} from "react";


export default function ItemList({items, onItemSelect } ) {
  const [sortBy, setSortBy] = useState("name");
  
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  
  return (
    <div>
      <div className= "m-5 mt-10">
      <label>Sort By:</label>
      <button
          style={{ backgroundColor: sortBy === "name" ? "blue" : "" }}
          onClick={() => setSortBy("name")}
          className="bg-blue-300 p-1 m-2 w-28 text-white mb-5"
        >
          Name
        </button>
        <button  style={{ backgroundColor: sortBy === "category" ? "blue" : "" }}
          onClick={() => setSortBy("category")}
          className = "bg-blue-300 p-1 m-2 w-28 text-white mb-5">Category</button>
        
        
      <ul>
        {sortedItems.map(item => (
          <Item key={item.id} name={item.name} category={item.category} quantity={item.quantity} onSelect={() => onItemSelect(item)}/>
        ))}
      </ul>
      </div>
    </div>
  );
}