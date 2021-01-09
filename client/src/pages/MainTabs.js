import React from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

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
            <h2>Offers Content</h2>
          </TabPanel>
          <TabPanel>
            <h2>Requests Content</h2>
          </TabPanel>
          <TabPanel>
            <h2>MyDashboard Content</h2>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default MainTabs;
