import React, { useEffect, useState } from "react";
import MainTabs from "./MainTabs";
import TopBar from "./TopBar";

export default function Landing() {
  return (
    <div>
      <TopBar />
      <MainTabs />
    </div>
  );
}
