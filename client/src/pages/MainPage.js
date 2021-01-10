import React, { useEffect, useState } from "react";
import MainTabs from "./MainTabs";
import TopBar from "./TopBar";

export default function MainPage() {
  return (
    <div>
      <TopBar />
      <MainTabs />
    </div>
  );
}
