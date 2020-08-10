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

export default function Form() {
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
    // Do something
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField label="Recipe Name" onChange={setName}/>
      <br />
      <TextField label="Type of Food" onChange={setType}/>
      <br />
      <TextField label="Ingredients" onChange={setIngredients}/>
      <br />
      <TextField label="Method" onChange={setMethod}/>
      <br />
      <Button variant="contained" onClick={() => addRecipe}>Add</Button>
    </form> 
  );
}
