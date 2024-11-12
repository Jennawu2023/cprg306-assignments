"use client";

import { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data.meals || [];
    } catch (error) {
        console.error("Failed to fetch meal ideas:", error);
        return [];
    }
};

const fetchMealDetails = async (idMeal) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data.meals[0] || {};
    } catch (error) {
        console.error("Failed to fetch meal details:", error);
        return {};
    }
};

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const [expandedMealId, setExpandedMealId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const loadMealIdeas = async () => {
        setLoading(true);
        setError(null);
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
        setLoading(false);
    };

    useEffect(() => {
        if (ingredient && ingredient.trim()) {
            console.log("Fetching meal ideas for ingredient:", ingredient);
            loadMealIdeas();
        }
    }, [ingredient]);

    const handleMealClick = async (idMeal) => {
        
        if (expandedMealId === idMeal) {
            setExpandedMealId(null);
        } else {
            const mealDetails = await fetchMealDetails(idMeal);
            setMeals(prevMeals =>
                prevMeals.map(meal =>
                    meal.idMeal === idMeal ? { ...meal, details: mealDetails } : meal
                )
            );
            setExpandedMealId(idMeal);
        }
    };

    return (
        <div>
            <h1>Meal Ideas</h1>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            <p className="text-white">{ingredient && meals.length > 0
                ? `Here are some meal ideas using ${ingredient}:`
                : ingredient
                ? `No meal ideas found for ${ingredient}`
                : "Please select an ingredient"}
            </p>
            <ul>
                {meals.map(meal => (
                    <li key={meal.idMeal}>
                        <div
                            className="p-2 m-1 text-yellow-50 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer"
                            onClick={() => handleMealClick(meal.idMeal)}
                        >
                            {meal.strMeal}
                        </div>
                        {expandedMealId === meal.idMeal && meal.details && (
                            <ul className="ml-4">
                                <h3>Ingredients:</h3>
                                {Object.keys(meal.details)
                                    .filter(key => key.startsWith('strIngredient') && meal.details[key])
                                    .map((key, index) => (
                                        <li key={index}>
                                            {meal.details[key]} - {meal.details[`strMeasure${index + 1}`]}
                                        </li>
                                    ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}