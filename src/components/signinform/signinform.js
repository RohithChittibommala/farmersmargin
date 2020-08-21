import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./signinform.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function SignInForm() {
  const classes = useStyles();

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      id="signinform"
    >
      <TextField
        id="outlined-size-small"
        className="input"
        label="username"
        variant="outlined"
      />
      <TextField
        id="outlined-size-small"
        className="input"
        label="password"
        variant="outlined"
      />
      <div className="button-group">
        <Button variant="contained" color="primary">
          Create Account
        </Button>
        <Button variant="contained" id="signin-button">
          Login
        </Button>
      </div>
    </form>
  );
}
