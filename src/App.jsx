import React, { useState } from 'react';
import { Button } from "@material-ui/core";
import './styles/App.css';
import icon from "./img/app-icon.jpeg";
import Form from "./components/Form";
import FormDelete from "./components/FormDelete";
import Display from "./components/Display";

function App() {
  const [storeRecipe, setStoreRecipe] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <img className="icon" src={icon} alt="icon"></img>
      </header>
      <Button variant="contained" onClick={() => setStoreRecipe(!storeRecipe)}>Add Recipe</Button>
      {storeRecipe ? (
        <Form storeRecipe={storeRecipe} setStoreRecipe={setStoreRecipe} />
        ) : (
        <>
        <Display />
        <FormDelete />
        </>
      )}
    </div>
  );
}

export default App;
