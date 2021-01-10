import React, {useState, useEffect} from "react";
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

const useStyles = makeStyles((theme) => ({
}));

export default function MainTabs() {
  const classes = useStyles();

  const [offers, setOffers] = useState([])
  const [requests, setRequests] = useState([])

  useEffect(() => {
    const userInfo = localStorage.getItem('user');
    fetch(`http://localhost:3001/listing/${userInfo}`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        params: userInfo // body data type must match "Content-Type" header
      }).then(obj => console.log(obj))
  }, [])

    return (
      <div>
        <Tabs>
          <TabList>
            <Tab>Offers</Tab>
            <Tab>Requests</Tab>
            <Tab>My Dashboard</Tab>
          </TabList>

          <TabPanel>
            <Grid container  alignItems="center" justify="center">
              <Input style={{width: "400px"}} type="text" placeholder="Search Offers..." />
              <Button>
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
          <TabPanel>
            <Grid container  alignItems="center" justify="center">
              <Input style={{width: "400px"}} type="text" placeholder="Search Requests..." />
              <Button>
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
          <TabPanel>
            <Grid container  alignItems="center" justify="center">
              <Input style={{width: "400px"}} type="text" placeholder="Search My Listings..." />
              <Button>
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