import React, { useState } from 'react';
import "../styles/FormRemove.css";

export default function FormRemove() {
  const [recipeId, setRecipeId] = useState("");

  function deleteRecipe() {
    const recipe = {
      id: recipeId 
    }
    fetch('/api/removeRecipe/:id', {
      method: 'delete',
      body: JSON.stringify(recipe),
      headers: { 'Content-type': 'application/json' }
    })
    window.location.reload();
  }

  return (
    <div className="form-remove">
      <button className="remove-button" onClick={() => deleteRecipe()}>ー Remove ー</button>
      <input placeholder="Recipe id" type="textarea" label="Recipe ID" onChange={(e) => setRecipeId(e.target.value)}/>
    </div>
  );
}
