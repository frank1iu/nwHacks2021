import React from "react";
import { Button } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import {
  InboxOutlined,
  MessageOutlined,
  NotificationsOutlined,
} from "@material-ui/icons";
// import CreateNewRequest from "./CreateNewRequest";

class TopBar extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <InboxOutlined />
        <MessageOutlined />
        <NotificationsOutlined />
        <NavLink to="/offerform">
          <Button>Create Offer</Button>
        </NavLink>
        <NavLink to="/requestform">
          <Button>Create Request</Button>
        </NavLink>

        {/* <Switch>
          <Route path="/form" component={CreateNewRequest} />
        </Switch> */}
      </div>
    );
  }
}

export default TopBar;
