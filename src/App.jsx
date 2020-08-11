import React from 'react';
import { Button } from "@material-ui/core";
import './styles/App.css';
import Form from "./components/Form";
import Display from "./components/Display";

function App() {
  return (
    <div className="App">
      <header className="App-header">Recipe Book</header>
      <Button variant="contained">Add Recipe</Button>
      <Form />
      <Display />
    </div>
  );
}

export default App;
