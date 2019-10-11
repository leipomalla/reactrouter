import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  listitem: {
    display: "inline-block",
    width: 150,
    textAlign: "right"
  }
});

const listitems = [
  {
    text: "home",
    path: "/",
    id: 1
  },
  {
    text: "first",
    path: "/first",
    id: 2
  },
  {
    text: "second",
    path: "/second",
    id: 3
  }
];

const MainNavigation = () => {
  const classes = useStyles();
  return (
    <div>
      <List component="nav">
        {listitems.map(item => (
          <ListItem className={classes.listitem} key={item.id}>
            <ListItemText>
              <Link to={item.path}>{item.text}</Link>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MainNavigation;
