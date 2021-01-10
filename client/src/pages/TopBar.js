import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { Divider, Grid, Paper } from '@material-ui/core';
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
    color: "black",
    border: '2px solid orange',
    background: '#f7f7f7'
  },
  main: {
    marginTop: '80px'
  },
  requestButton: {
    color: "black",
    border: '2px solid orange',
    background: '#f7f7f7'
  },
  logo: {
    position: 'absolute',
    top: 12,
    left: 30,
  },
  iconButtons: {
    position: 'absolute',
    top: 15,
    right: 230,
  },
  mainButtons: {
    position: 'absolute',
    top: 20,
    right: 50,
  }
}));

export default function TopBar() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
        <img className={classes.logo} alt="share street logo" style={{ width: 140, height: 50 }} src={logo}/>
        <Grid className={classes.iconButtons}>
          <IconButton>
            <InboxOutlined/>
          </IconButton>
          <IconButton>
            <MessageOutlined />
          </IconButton>
          <IconButton>
          <NotificationsOutlined />
          </IconButton>
        </Grid>
        <Grid className={classes.mainButtons}>
          <NavLink to="/offerform" style={{ textDecoration: 'none' }}>
            <Button 
              className={classes.offerButton}
              variant="outlined" 
            >Offer</Button>
          </NavLink>
          &nbsp;
          <NavLink to="/requestform" style={{ textDecoration: 'none' }}>
            <Button 
              className={classes.requestButton}
              variant="outlined"
            >Receive</Button>
          </NavLink>
        </Grid>
    </div>
  );
}