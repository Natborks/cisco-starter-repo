import React, { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Exhibit from "./components/Exhibit/Exhibit";
import MaxwidthWrapper from "./components/MaxwidthWrapper/MaxwidthWrapper";
import Metric from "./components/Metric/Metric";

function App() {
  const [userIp, setUserIp] = useState({ ipv4: "", ipv6: "" });

  React.useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data1) => {
        fetch("https://api64.ipify.org?format=json")
          .then((response) => response.json())
          .then((data) => setUserIp({ ipv4: data1.ip, ipv6: data.ip }))
          .catch((error) => alert(error));
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Banner />

      <main>
        <MaxwidthWrapper>
          <Exhibit>
            <Metric data={userIp.ipv4} />
            <Metric data={userIp.ipv6} ipv6 />
          </Exhibit>
        </MaxwidthWrapper>
      </main>
    </>
  );
}

export default App;
