import React from "react";
import { Input } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { SearchOutlined } from "@material-ui/icons";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import OfferItems from "../components/OfferItems";
import RequestItems from "../components/RequestItems";
import MyItems from "../components/MyItems";
import 'react-tabs/style/react-tabs.css';


const useStyles = makeStyles((theme) => ({
  mainPanel: {
    background: '#E9E9E9',
    outline: 'grey',
  },
  searchbar: {
    top: '5px',
    background: 'white'
  },
  searchbutton: {
    top: '5px',
    minHeight: '12px',
    minWidth: '10px'
  }
}));

export default function MainTabs() {
  const classes = useStyles();

  return (
    <div>
      <Tabs>
        <TabList className={classes.tabs}>
          <Tab className={classes.offers}>Offers</Tab>
          <Tab>Requests</Tab>
          <Tab className={classes.mydashboard}>My Dashboard</Tab>
        </TabList>

        <TabPanel className={classes.mainPanel}>
          <Grid container  alignItems="center" justify="center">
            <Input className={classes.searchbar} style={{width: "400px"}} type="text" placeholder="  Search Offers..." />
            <Button className={classes.searchbutton}>
              <SearchOutlined />
            </Button>
          </Grid>
          <OfferItems /> 
          <OfferItems />
          <OfferItems />
          <OfferItems />
          <OfferItems />
          <OfferItems />
          {/* Placeholders */}
        </TabPanel>
        <TabPanel className={classes.mainPanel}>
          <Grid container  alignItems="center" justify="center">
            <Input className={classes.searchbar} style={{width: "400px"}} type="text" placeholder="  Search Requests..." />
            <Button className={classes.searchbutton}>
              <SearchOutlined />
            </Button>
          </Grid>
          <RequestItems />
          <RequestItems />
          <RequestItems />
          <RequestItems />
          <RequestItems />
          {/* Placeholders */}
        </TabPanel>
        <TabPanel className={classes.mainPanel}>
          <Grid container  alignItems="center" justify="center">
            <Input className={classes.searchbar} style={{width: "400px"}} type="text" placeholder="  Search My Listings..." />
            <Button className={classes.searchbutton}>
              <SearchOutlined />
            </Button>
          </Grid>
          <MyItems />
          <MyItems />
          <MyItems />
          <MyItems />
          <MyItems />
          <MyItems />
          {/* Placeholders */}
        </TabPanel>
      </Tabs>
    </div>
  );
}