import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField label="Recipe Name" />
      <br />
      <TextField label="Type of Food" />
      <br />
      <TextField label="Ingredients" />
      <br />
      <TextField label="Method" />
    </form> 
  );
}
