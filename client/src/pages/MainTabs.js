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
import 'react-tabs/style/react-tabs.css';


const useStyles = makeStyles((theme) => ({
  mainPanel: {
    background: '#f0f0f0',
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

  const [offers, setOffers] = useState([])
  const [requests, setRequests] = useState([])
  const [offerSearch, setOfferSearch] = useState("")
  const [requestSearch, setRequestSearch] = useState("")

  useEffect(() => {
    const userInfo = localStorage.getItem('user');
    fetch(`http://localhost:3001/listing/${userInfo}`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        // params: userInfo // body data type must match "Content-Type" header
      }).then(res => res.json())
      .then(res => {
        console.log(res)
        if(res.listings){
          setOffers(res.listings.offers);
          setRequests(res.listings.requests);
        }
      })
      .catch(err => console.log(err));
  }, [])

  // const renderOffers = () => {
  //   const filtered = offers.filter((offer, idx) => offer.item.toLowerCase().includes(offerSearch.toLocaleLowerCase())) || offerSearch === "";
  //   console.log(filtered)
  //   const output = filtered.map((offer, idx) => 
  //     <RequestItems key={`${idx}|${offer.item}|${offer.submitter}`} submitter={offer.submitter} item={offer.item} description={offer.description} quantity={offer.quantity} timestamp={offer.timestamp} /> 
  //   );
  //   return output;
  // }

  // const renderRequests = () => {
  //   const filtered = requests.filter((request, idx) => request.item.toLowerCase().includes(requestSearch.toLocaleLowerCase()));
  //   const output = filtered.map((request, idx) => 
  //     <RequestItems key={`${idx}|${request.item}|${request.submitter}`} submitter={request.submitter} item={request.item} description={request.description} quantity={request.quantity} timestamp={request.timestamp} /> 
  //   );
  //   return output;
  // }

  return (
    <div>
      <Tabs>
        <TabList className={classes.tabs}>
          <Tab className={classes.offers}>Offers</Tab>
          <Tab>Requests</Tab>
          <Tab className={classes.mydashboard} style={{float:"right"}} >My Dashboard</Tab>
        </TabList>

        <TabPanel className={classes.mainPanel}>
          <Grid container  alignItems="center" justify="center">
            <Input className={classes.searchbar} style={{width: "400px"}} type="text" value={offerSearch} onChange={e => setOfferSearch(e.target.value)} placeholder="  Search Offers..." />
            <Button className={classes.searchbutton}>
              <SearchOutlined />
            </Button>
          </Grid>
          {offers && offers.map((offer, idx) => 
            <RequestItems key={`${idx}|${offer.item}|${offer.submitter}`} submitter={offer.submitter} item={offer.item} description={offer.description} quantity={offer.quantity} timestamp={offer.timestamp} /> 
          )}
        </TabPanel>
        <TabPanel className={classes.mainPanel}>
          <Grid container  alignItems="center" justify="center">
            <Input className={classes.searchbar} style={{width: "400px"}} type="text" value={requestSearch} onChange={e => setRequestSearch(e.target.value)} placeholder="  Search Requests..." />
            <Button className={classes.searchbutton}>
              <SearchOutlined />
            </Button>
          </Grid>
          {requests && requests.map((request, idx) => 
            <RequestItems key={`${idx}|${request.item}|${request.submitter}`} submitter={request.submitter} item={request.item} description={request.description} quantity={request.quantity} timestamp={request.timestamp} /> 
          )}
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