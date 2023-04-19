import { useEffect, useState } from "react";
import DropdownRoom from "./components/DropdownRoom";
import HighchartsFlags from "./components/HighChartsFlags/HighchartsFlags";
// import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  // const username = process.env.REACT_APP_USERNAME;
  // const password = process.env.REACT_APP_PASSWORD;
  // const url = process.env.REACT_APP_URL;

  useEffect(() => {
    const url =
      "https://cdn.jsdelivr.net/gh/highcharts/highcharts@v10.3.3/samples/data/usdeur.json";

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     let authString = username + ":" + password;
  //     let encodedAuthString = btoa(authString);
  //     try {
  //       const response = await axios.get(
  //         url + "/active_v2/history?retrieveValues=true",
  //         {
  //           headers: {
  //             mode: "cors",
  //             Authorization: "Basic cG9zdG1hbjpQb3N0bWFuMTIz",
  //           },
  //         }
  //       );
  //       const responseData = response.data;
  //       console.log(
  //         "🚀 ~ file: HighchartsFlags.jsx:36 ~ fetchData ~ responseDa-ta:",
  //         responseData
  //       );
  //       // setData(responseData);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchData();
  // }, []);

  function handleSelect(option) {
    console.log(`Option : ${option}`);
  }

  const options = ["Option 1", "Option 2", "Option 3"];
  return (
    <div className="app">
      <DropdownRoom options={options} onSelect={handleSelect} />
      <HighchartsFlags data={data} />
    </div>
  );
}

export default App;
