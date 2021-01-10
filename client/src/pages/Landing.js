import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Divider, Grid, Paper, Button, TextField, Typography, Select } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";
import splashImage from "../images/sharestreet.jpg";
import {
  InboxOutlined,
  MessageOutlined,
  NotificationsOutlined,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    fullWidth: {
        width:"100%",
        height:"100%",
    },
    splashImage: {
        maxWidth:"100%",
        height:"100vh"
    },
    sidePadding: {
        paddingLeft: 40,
        paddingRight: 40,
        marginTop: "20vh",
    },
    topMargin: {
        marginTop: 20
    },
    textField:{
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    button: {
        background: '#ffc06e',
        alignSelf: 'center',
        borderRadius: 0,
        width: "93%",
        marginTop: 20
    },
}));

export default function Landing() {
    const classes = useStyles();

    const [username, setUsername] = useState("");
    const [loginUsername, setLoginUsername] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [redirect, setRedirect] = useState(false);

    const signup = () => {
        const data = {username, email, name, type: "Organization"};
        fetch(`http://localhost:3001/register`, {
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          }).then(res => {
              if(res.status === 200) {
                  const localStorage = window.localStorage;
                  localStorage.clear();
                  localStorage.setItem('user', username); //username
                  setRedirect(true);
              }
          })
    }

    const login = () => {
        const localStorage = window.localStorage;
        localStorage.clear();
        localStorage.setItem('user', loginUsername); //username
        setRedirect(true);
    }

    return (
        <Grid container direction="row" className={classes.fullWidth}>
            {redirect && <Redirect to="/main" />}
            <Grid xs={0} md={8} item>
                <img src={splashImage} className={classes.splashImage} />
            </Grid>
            <Grid xs={4}>
                <Grid xs={12} item className={classes.topMargin} >
                    <Typography variant="h4" style={{textAlign: "center"}}>Find What You Need On Share Street</Typography>
                </Grid>
                <Grid className={classes.topAutoMargin}>
                    <Tabs className={classes.sidePadding}>
                        <TabList >
                            <Tab >Sign Up</Tab>
                            <Tab>Log In</Tab>
                        </TabList>
                        <TabPanel>
                            <Grid container direction="column" >
                                <TextField color="secondary" value={name} className={classes.textField} onChange={e => setName(e.target.value)} variant="outlined" placeholder="Organization Name" />
                                <TextField color="secondary" value={username} className={classes.textField} onChange={e => setUsername(e.target.value)} variant="outlined" placeholder="Username" />
                                <TextField color="secondary" value={email} className={classes.textField} onChange={e => setEmail(e.target.value)} variant="outlined" placeholder="Email Address" />
                                <TextField color="secondary" type="password" className={classes.textField} variant="outlined" placeholder="Password" />
                                <Button variant="outlined" fullWidth className={classes.button} onClick={signup}> Sign Up </Button>
                            </Grid>
                        </TabPanel>
                        <TabPanel>
                            <Grid container direction="column" >
                                <TextField color="secondary" value={loginUsername} className={classes.textField} onChange={e => setLoginUsername(e.target.value)} variant="outlined" placeholder="Username" />
                                <TextField color="secondary" type="password" className={classes.textField} variant="outlined" placeholder="Password" />
                                <Button variant="outlined" fullWidth className={classes.button} onClick={login}> Log In </Button>
                            </Grid>
                        </TabPanel>
                    </Tabs>
                </Grid>
            </Grid>
        </Grid>
    )
}
