import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
import ItemInput from "../components/ItemInput";

class CreateNewOffer extends React.Component {
  render() {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <NavLink to="/">
            <Button>Home</Button>
          </NavLink>
        </div>
        <Tabs>
          <TabList>
            <Tab>Create New Request</Tab>
          </TabList>
          <TabPanel>
            <ItemInput />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default CreateNewOffer;
