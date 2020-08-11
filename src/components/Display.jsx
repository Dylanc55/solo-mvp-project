import React, { useState, useEffect } from "react";
import { getRecipes } from "../utils/index";
import "../styles/Display.css";

export default function Display() {
    
    async function displayRecipes() {
        let recipes = await getRecipes();
        await recipes;
        setRecipes(recipes);
    }
    useEffect(() => {
        displayRecipes();
    }, [])

    const [recipes, setRecipes] = useState([{name: "", type: "", ingredients: "", method: ""}]);

    return (
        <div className="display-container">
           <div className="recipe-container">
               {recipes.map(recipe => (
                   <>
                   <div>Recipe</div>
                   <div>{recipe.name}</div>
                   <div>{recipe.type}</div>
                   <div>{recipe.ingredients}</div>
                   <div>{recipe.method}</div>
                   <hr />
                   </>
               ))}
           </div>
        </div>
    )
}