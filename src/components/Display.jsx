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
           {console.log("log", recipes)}
        </div>
    )
}