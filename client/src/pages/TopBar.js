import React from "react";
import { Button } from "@material-ui/core";

class TopBar extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button>Create Offer</Button>
        <Button>Create Request</Button>
      </div>
    );
  }
}

export default TopBar;
