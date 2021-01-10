import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
import ItemInput from "../components/ItemInput";
import logo from "../images/logo.png"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mainPanel: {
    background: '#E9E9E9',
    height: '1000px'
  },
  logo: {
    position: 'absolute',
    top: 12,
    left: 10,
  },
  main: {
    marginTop: '80px',
  },
  homeButton: {
    position: 'absolute',
    right: '30px',
    top: '18px',
    color: "black",
    border: '2px solid orange',
    background: '#f7f7f7'
  }
}))

export default function CreateNewOffer() {
  const classes = useStyles();

  return (
      <div className={classes.main}>
        <img className={classes.logo} alt="share street logo" style={{ width: 140, height: 50 }} src={logo}/>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <NavLink to="/">
            <Button className={classes.homeButton}>Home</Button>
          </NavLink>
        </div>
        <Tabs>
          <TabList>
            <Tab>Create New Offer</Tab>
          </TabList>
          <TabPanel className={classes.mainPanel}>
            <ItemInput />
          </TabPanel>
        </Tabs>
      </div>
  );
}
