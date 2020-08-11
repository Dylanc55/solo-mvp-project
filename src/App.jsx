import React, { useState } from 'react';
import { Button } from "@material-ui/core";
import './styles/App.css';
import Form from "./components/Form";
import Display from "./components/Display";

function App() {
  const [storeRecipe, setStoreRecipe] = useState(false)
  return (
    <div className="App">
      <header className="App-header">Recipe Book</header>
      <Button variant="contained" onClick={() => setStoreRecipe(!storeRecipe)}>Add Recipe</Button>
      {storeRecipe ? (
        <Form addRecipe={storeRecipe} setAddRecipe={setStoreRecipe} />
        ) : (
        <Display />
      )}
    </div>
  );
}

export default App;
