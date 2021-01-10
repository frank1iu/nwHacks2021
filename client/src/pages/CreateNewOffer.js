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
    background: '#f0f0f0',
    height: '1000px'
  },
  logo: {
    position: 'absolute',
    top: 12,
    left: 30,
  },
  main: {
    marginTop: '80px',
  },
  homeButton: {
    position: 'absolute',
    right: '50px',
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
          <NavLink to="/main">
            <Button className={classes.homeButton}>Back</Button>
          </NavLink>
        </div>
        <Tabs>
          <TabList>
            <Tab>Create New Offer</Tab>
          </TabList>
          <TabPanel className={classes.mainPanel}>
            <ItemInput listingtype="Offer" />
          </TabPanel>
        </Tabs>
      </div>
  );
}
