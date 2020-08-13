import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Form({ storeRecipe, setStoreRecipe }) {
  const classes = useStyles();
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
    // console.log("frontend", recipe)
    fetch('http://localhost:3000/api/addRecipe', {
      method: 'post',
      body: JSON.stringify(recipe),
      headers: { 'Content-type': 'application/json' }
    })
  }

  return (
    <form id="form" className={classes.root} noValidate autoComplete="off">
      <TextField label="Recipe Name" onChange={(e) => setName(e.target.value)}/>
      <br />
      <TextField label="Type of Food" onChange={(e) => setType(e.target.value)}/>
      <br />
      <TextField label="Ingredients" onChange={(e) => setIngredients(e.target.value)}/>
      <br />
      <TextField label="Method" onChange={(e) => setMethod(e.target.value)}/>
      <br />
      <Button variant="contained" onClick={() => addRecipe()}>Add</Button>
    </form> 
  );
}
