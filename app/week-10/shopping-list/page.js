"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import {useState} from "react";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { useEffect } from "react";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
    const { user } = useUserAuth();
    const [items, setItems] = useState([]);
    
    const handleAddItem = async (newItem) => {
        try {
            const id = await addItem(user.uid, newItem); 
            const updatedItem = { ...newItem, id }; 
            setItems((prevItems) => [...prevItems, updatedItem]); 
        } catch (error) {
            console.error("Failed to add item:", error);
        }
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

    const loadItems = async () => {
        const items = await getItems(user.uid);
        setItems(items);
    };

    useEffect(() => {
        if (user) {
            loadItems();
        }
    },[user]);

    if (!user) {
        return (
            <main>
                <h1>Week 9</h1>
                <p>You must be logged in.</p>
            </main>
        );}

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