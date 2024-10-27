"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemData from "./items.json";
import {useState} from "react";
import MealIdeas from "./meal-ideas";

export default function Page() {
    const [items, setItems] = useState(itemData);
    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleItemSelect = (item) => {
        const cleanedItemName = item.name
            .split(",")[0] 
            .trim() 
            .replace(
                /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
                "");
        setSelectedItemName(cleanedItemName); 
    };

    return(
        <main className="bg-black text-white p-4">
            <h1 className="text-3xl font-bold m-2">Shopping List</h1>
            <div className="flex">
              <div className="flex-1">
                 <NewItem onAddItem={handleAddItem}/>
                 <ItemList items={items} onItemSelect={handleItemSelect}/>
              </div>
              <div className="flex-1">
                 <MealIdeas ingredient={selectedItemName} /> 
              </div>
            </div>
            
        </main>
    );

}