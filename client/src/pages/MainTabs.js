import React from "react";
import { Button, Input } from "@material-ui/core";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Items from "../components/Items";
import { SearchOutlined } from "@material-ui/icons";

class MainTabs extends React.Component {
  render() {
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
}

export default MainTabs;
