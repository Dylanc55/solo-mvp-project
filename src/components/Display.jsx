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
            {recipes.map(recipe => (
                <div className="recipe-container">
                   <div id="recipe-name" className="recipe-contents">{recipe.name}</div>
                   <div className="recipe-contents">{recipe.type}</div>
                   <div className="ing-dir">
                       <div>
                            <div className="recipe-subheading">ー Ingredients ー</div>
                            <div className="recipe-contents">{recipe.ingredients}</div>
                       </div>
                       <div>
                            <div className="recipe-subheading">ー Directions ー</div>
                            <div className="recipe-contents">{recipe.method}</div>
                       </div>
                   </div>
                   <div className="recipe-subheading">ー id ー</div>
                   <div className="recipe-contents">{recipe.id}</div>
                </div>
            ))}
        </div>
    )
}