import React from "react";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  root: {
    background: "lightgrey",
    display: "block",
    width: 400,
    borderRadius: 5,
    padding: 20,
    textAlign: "right"
  }
});

const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <form className={classes.root}>
        <TextField fullWidth variant="outlined" label="First name"></TextField>
        <TextField fullWidth variant="outlined" label="Last name"></TextField>
        <TextField
          fullWidth
          variant="outlined"
          label="Email"
          type="email"
        ></TextField>
        <TextField
          variant="outlined"
          fullWidth
          label="Phone"
          type="phone"
        ></TextField>
        <TextField
          variant="outlined"
          fullWidth
          label="Password"
          type="password"
        ></TextField>
      </form>
    </div>
  );
};

export default Footer;
