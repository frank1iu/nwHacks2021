import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Route, Link } from "react-router-dom";
import MainTabs from "./MainTabs";

// const useStyles = makeStyles((theme) => ({
//   landingContainer: {
//     margin: theme.spacing.unit * 2,
//   },
// }));

export default function Landing() {
  // const classes = useStyles();
  return (
    <div>
      <MainTabs />
    </div>
  );
}
