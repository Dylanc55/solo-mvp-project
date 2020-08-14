import React, { useState } from 'react';
import "../styles/FormRemove.css";

export default function FormRemove({ storeRecipe, setStoreRecipe }) {
  const [recipeId, setRecipeId] = useState("");

  function deleteRecipe() {
    const recipe = {
      id: recipeId 
    }
    setStoreRecipe(!storeRecipe);
    fetch('/api/removeRecipe/:id', {
      method: 'delete',
      body: JSON.stringify(recipe),
      headers: { 'Content-type': 'application/json' }
    })
  }

  return (
    <div>
      <input type="textarea" label="Recipe ID" onChange={(e) => setRecipeId(e.target.value)}/>
      <br />
      <button className="remove-button" onClick={() => deleteRecipe()}>ー Remove ー</button>
    </div>
  );
}
