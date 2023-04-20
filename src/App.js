import { useEffect, useState } from "react";
import DropdownRoom from "./components/DropdownRoom";
import HighchartsFlags from "./components/HighChartsFlags/HighchartsFlags";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  console.log("🚀 ~ file: App.js:8 ~ App ~ data:", data);
  // const [floorMin, setFloorMin] = useState(0);

  useEffect(() => {
    const username = process.env.REACT_APP_USERNAME;
    const password = process.env.REACT_APP_PASSWORD;
    async function fetchData() {
      let authString = username + ":" + password;
      let encodedAuthString = btoa(authString);
      try {
        const response = await axios.get(
          "https://192.168.12.146:443/v2/history?retrieveValues=true&period=lastYear",
          {
            headers: {
              mode: "cors",
              Authorization: "Basic cG9zdG1hbjpQb3N0bWFuMTIz",
            },
          }
        );
        const responseData = response.data;
        const tableau = responseData[8].data;
        const tableauTransforme = tableau.map((objet) => {
          const timestamp = new Date(objet.Timestamp).getTime();
          const valeur = objet.Value;
          return [timestamp, valeur];
        });

        setData(tableauTransforme);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

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
