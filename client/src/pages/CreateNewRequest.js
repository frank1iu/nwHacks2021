import React from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
import ItemInput from "../components/ItemInput";

class CreateNewRequest extends React.Component {
  render() {
    return (
      <div>
        <NavLink to="/">
          <Button>Back</Button>
        </NavLink>
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

export default CreateNewRequest;
