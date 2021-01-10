import React from "react";
import { Input } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Items from "../components/Items";
import { SearchOutlined } from "@material-ui/icons";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function MainTabs() {
  const classes = useStyles();

    return (
      <div>
        <Tabs>
          <TabList>
            <Tab>Offers</Tab>
            <Tab>Requests</Tab>
            <Tab>My Dashboard</Tab>
          </TabList>

          <TabPanel>
            <Input type="text" placeholder="Search Offers..." />
            <Button>
              <SearchOutlined />
            </Button>

            <Items />
            <Items />
          </TabPanel>
          <TabPanel>
            <Input type="text" placeholder="Search Requests..." />
            <Button>
              <SearchOutlined />
            </Button>
            <Items />
            <Items />
          </TabPanel>
          <TabPanel>
            <Input type="text" placeholder="Search My Listings..." />
            <Button>
              <SearchOutlined />
            </Button>
            <Items />
            <Items />
          </TabPanel>
        </Tabs>
      </div>
    );
}
