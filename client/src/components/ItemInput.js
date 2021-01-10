import React from "react";
import { InputBase, Button } from "@material-ui/core";

export default function ItemInput() {
  return (
    <div>
      <img alt="" src={require("./placeholder.png")} />
      <InputBase type="text" placeholder="Title" fullWidth />
      <InputBase type="text" placeholder="Description" fullWidth />
      <InputBase type="number" placeholder="Qty Offered/Needed" fullWidth />
      <Button>Post</Button>
    </div>
  );
}
