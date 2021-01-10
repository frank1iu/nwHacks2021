import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { Divider, Grid, Paper } from '@material-ui/core';
import classes from "./pages.css"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from "react-router-dom";
import logo from "../images/logo.png";
import {
  InboxOutlined,
  MessageOutlined,
  NotificationsOutlined,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  offerButton: {
    color: "white",
    background: '#8FDDEC'
  },
  requestButton: {
    color: "white",
    background: '#FFB478'
  }
}));

export default function TopBar() {
  const classes = useStyles();

  return (
    <div>
        <img alt="share street logo" style={{ width: 120, height: 45 }} src={logo}/>
        <IconButton>
          <InboxOutlined/>
        </IconButton>
        <IconButton>
          <MessageOutlined />
        </IconButton>
        <IconButton>
         <NotificationsOutlined />
        </IconButton>
      
        <NavLink to="/offerform">
          <Button 
            className={classes.offerButton}
            variant="contained" 
          >Create Offer</Button>
        </NavLink>
        <NavLink to="/requestform">
          <Button 
            className={classes.requestButton}
            variant="contained"
          >Create Request</Button>
        </NavLink>
    </div>
  );
}