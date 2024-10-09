"use client";

import Item from "./item";
import {useState} from "react";
import items from "./items.json";

export default function ItemList() {
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
      <button type="button" className={`bg-orange-500 p-1 m-2 w-28 text-white font-semibold rounded ${sortBy === "name" ? "bg-green-500" : "bg-green-700"}`} onClick={() => setSortBy("name")}> Name </button>
      <button type="button" className={`bg-orange-500 p-1 m-2 w-28 text-white font-semibold rounded  ${sortBy === "category" ? "bg-green-500" : "bg-green-700"}`} onClick={() => setSortBy("category")}> Category </button>
      <ul>
        {sortedItems.map(item => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
      </div>
    </div>
  );
}