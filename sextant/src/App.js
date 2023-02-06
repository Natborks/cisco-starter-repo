import React from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Exhibit from "./components/Exhibit/Exhibit";
import ExhibitWrapper from "./components/ExhibitWrapper";
import MaxwidthWrapper from "./components/MaxwidthWrapper/MaxwidthWrapper";
import Metric from "./components/Metric/Metric";
import SocketData from "./components/SocketData/SocketData";

function App() {
  return (
    <>
      <Banner />

      <main>
        <MaxwidthWrapper>
          <ExhibitWrapper>
            <Exhibit title="IP address V4">
              <Metric url="https://api.ipify.org?format=json" />
            </Exhibit>
            <Exhibit title="IP address V6 ">
              <Metric ipv6 url="https://api64.ipify.org?format=json" />
            </Exhibit>
            <Exhibit title="Pylon Packet Latency">
              <SocketData />
            </Exhibit>
          </ExhibitWrapper>
        </MaxwidthWrapper>
      </main>
    </>
  );
}

export default App;
