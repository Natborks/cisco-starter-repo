import React, { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Exhibit from "./components/Exhibit/Exhibit";
import MaxwidthWrapper from "./components/MaxwidthWrapper/MaxwidthWrapper";
import Metric from "./components/Metric/Metric";

function App() {
  return (
    <>
      <Banner />

      <main>
        <MaxwidthWrapper>
          <Exhibit>
            <Metric url="https://api.ipify.org?format=json" />
            <Metric ipv6 url="https://api64.ipify.org?format=json" />
          </Exhibit>
        </MaxwidthWrapper>
      </main>
    </>
  );
}

export default App;
