import "./App.css";
import Banner from "./components/Banner/Banner";
import Exhibit from "./components/Exhibit/Exhibit";
import MaxwidthWrapper from "./components/MaxwidthWrapper/MaxwidthWrapper";
import Metric from "./components/Metric/Metric";

function App() {
  const metricData = { title: "User IP", value: "8.8.8.8" };

  return (
    <>
      <Banner />

      <main>
        <MaxwidthWrapper>
          <Exhibit>
            <Metric data={metricData} />
            <Metric data={metricData} />
            <Metric data={metricData} />
          </Exhibit>
        </MaxwidthWrapper>
      </main>
    </>
  );
}

export default App;
