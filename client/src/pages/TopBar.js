import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
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
  root: {
    '& > *': {
      margin: theme.spacing(5),
    },
  },
}));

export default function TopBar() {
  const classes = useStyles();

  return (
    <div>
        <img alt="share street logo" style={{ width: 120, height: 45 }} src={logo}/>
        <InboxOutlined />
        <MessageOutlined />
        <NotificationsOutlined />
        <NavLink to="/offerform">
          <Button variant="contained" color={"8FDDEC"}>Create Offer</Button>
        </NavLink>
        <NavLink to="/requestform">
          <Button variant="contained">Create Request</Button>
        </NavLink>
    </div>
  );
}