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
    <div>
      <input type="textarea" onChange={(e) => setName(e.target.value)}/>
      <br />
      <input type="textarea" onChange={(e) => setType(e.target.value)}/>
      <br />
      <input type="textarea" onChange={(e) => setIngredients(e.target.value)}/>
      <br />
      <input type="textarea" onChange={(e) => setMethod(e.target.value)}/>
      <br />
      <button className="add-button" onClick={() => addRecipe()}>ー Add ー</button>
    </div>
  );
}
