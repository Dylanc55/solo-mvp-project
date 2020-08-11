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

export default function FormDelete() {
  const classes = useStyles();
  const [recipeId, setRecipeId] = useState("");

  function deleteRecipe() {
    const recipe = {
      id: recipeId 
    }
    console.log("frontend", recipe)
    fetch('http://localhost:3000/api/delete', {
      method: 'delete',
      body: JSON.stringify(recipe),
      headers: { 'Content-type': 'application/json' }
    })
  }

  return (
    <form id="form" className={classes.root} noValidate autoComplete="off">
      <TextField label="Recipe ID" onChange={(e) => setRecipeId(e.target.value)}/>
      <br />
      <Button variant="contained" onClick={() => deleteRecipe()}>Delete</Button>
    </form> 
  );
}
