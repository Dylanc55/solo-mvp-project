import React, { useState, useEffect } from "react";
import { getRecipes } from "../utils/index";

export default function Display() {
    
    async function displayRecipes() {
        let recipes = await getRecipes();
        await recipes;
        setRecipes(recipes);
    }
    useEffect(() => {
        displayRecipes();
    }, [])

    const [recipes, setRecipes] = useState();

    return (
        <div>
           <div>
               {recipes.map(recipe => (
                   <>
                   <div>{recipe.name}</div>
                   <div>{recipe.type}</div>
                   <div>{recipe.ingredients}</div>
                   <div>{recipe.method}</div>
                   </>
               ))}
           </div>
        </div>
    )
}