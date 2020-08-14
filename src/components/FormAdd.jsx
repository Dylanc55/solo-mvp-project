import React, { useState } from 'react';
import "../styles/FormAdd.css";

export default function FormAdd({ storeRecipe, setStoreRecipe }) {
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [ingredients, setIngredients] = useState();
  const [method, setMethod] = useState();

  function addRecipe() {
    const recipe = {
      name: name,
      type: type,
      ingredients: ingredients,
      method: method,
    }
    setStoreRecipe(!storeRecipe);
    fetch('/api/addRecipe/:recipe', {
      method: 'post',
      body: JSON.stringify(recipe),
      headers: { 'Content-type': 'application/json' }
    })
  }

  return (
    <div className="form-add">
      <div className="form-title">Add Your Recipe Here:</div>
      <input className="input-add" placeholder="Name of Dish" type="textarea" size="50" onChange={(e) => setName(e.target.value)}/>
      <input className="input-add" placeholder="Type of Dish" type="textarea" size="50" onChange={(e) => setType(e.target.value)}/>
      <input className="input-add" placeholder="Ingredients" type="textarea" size="50" onChange={(e) => setIngredients(e.target.value)}/>
      <input className="input-add" placeholder="Directions" type="textarea" size="50" onChange={(e) => setMethod(e.target.value)}/>
      <button className="add-button" onClick={() => addRecipe()}>ー Add ー</button>
    </div>
  );
}
