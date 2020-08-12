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

    const [recipes, setRecipes] = useState([{id: "", name: "", type: "", ingredients: "", method: ""}]);

    return (
        <div className="display-container">
           <div className="recipe-container">
               {recipes.map(recipe => (
                   <>
                   <div className="recipe-subheading">Name</div>
                   <div id="recipe-name" className="recipe-contents">{recipe.name}</div>
                   <div className="recipe-subheading">Type</div>
                   <div className="recipe-contents">{recipe.type}</div>
                   <div className="recipe-subheading">Ingredients</div>
                   <div className="recipe-contents">{recipe.ingredients}</div>
                   <div className="recipe-subheading">Method</div>
                   <div className="recipe-contents">{recipe.method}</div>
                   <div className="recipe-subheading">ID</div>
                   <div className="recipe-contents">{recipe.id}</div>
                   <hr />
                   </>
               ))}
           </div>
        </div>
    )
}