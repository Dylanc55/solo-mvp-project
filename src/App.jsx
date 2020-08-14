import React, { useState } from 'react';
import './styles/App.css';
import icon from "./img/app-icon.jpeg";
import FormAdd from "./components/FormAdd";
import FormRemove from "./components/FormRemove";
import Display from "./components/Display";

function App() {
  const [storeRecipe, setStoreRecipe] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img className="icon" src={icon} alt="icon"></img>
      </header>
      {storeRecipe ? (
        <span>
          <button className="return-button" onClick={() => setStoreRecipe(!storeRecipe)}>ー Return ー</button>
          <FormAdd storeRecipe={storeRecipe} setStoreRecipe={setStoreRecipe} />
          <FormRemove storeRecipe={storeRecipe} setStoreRecipe={setStoreRecipe}/>
        </span>
        ) : (
        <>
          <button className="add-remove-button" onClick={() => setStoreRecipe(!storeRecipe)}>ー Add/Remove Recipe ー</button>
          <Display />
        </>
      )}
    </div>
  );
}

export default App;
