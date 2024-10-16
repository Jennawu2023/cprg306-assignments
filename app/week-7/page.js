"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemData from "./items.json";
import {useState} from "react";

export default function Page() {
    const [items, setItems] = useState(itemData);
    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };
    return(
        <main className="bg-neutral-600 text-white p-4">
            <h1 className="text-3xl font-bold m-2">Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items}/>
        </main>
    );

}