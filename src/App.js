import { useEffect, useState } from "react";
import DropdownRoom from "./components/DropdownRoom";
import HighchartsFlags from "./components/HighChartsFlags/HighchartsFlags";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState("Pollux");
  const [floor, setFloor] = useState(0);

  function getFloorMin() {
    const floorMin = Math.min(...data.flat());
    setFloor(floorMin);
  }

  const rooms = {
    Pollux: "o0TbJuxtrLPSEIP7wwfox",
    Sirius: "A0TbJwui7R67wG9Hi6NF3",
    Scuti: "d0TbJwvYj4lzXFIBUuvlH",
    Proxima: "d0TbJwwcmL1LP8OpPDrAE",
  };

  function getRoomId(roomName) {
    return rooms[roomName];
  }

  useEffect(() => {
    const username = process.env.REACT_APP_USERNAME;
    const password = process.env.REACT_APP_PASSWORD;
    async function fetchData() {
      const authString = username + ":" + password;
      const encodedAuthString = btoa(authString);
      const roomId = getRoomId(selectedRoom);
      if (roomId) {
        try {
          const response = await axios.get(
            `https://192.168.12.146:443/v2/history/${roomId}?retrieveValues=true&period=lastYear`,
            {
              headers: {
                mode: "cors",
                Authorization: "Basic " + encodedAuthString,
              },
            }
          );
          const responseData = response.data;
          const array = responseData[0].data;
          const arrayTransforme = array.map((objet) => {
            const timestamp = new Date(objet.Timestamp).getTime();
            const value = objet.Value;
            return [timestamp, value];
          });

          setData(arrayTransforme);
        } catch (error) {
          console.error(error);
        }
      }
    }
    fetchData();
    getFloorMin();
  }, [selectedRoom]);

  function handleSelect(option) {
    setSelectedRoom(option);
  }

  return (
    <div className="app">
      <DropdownRoom onSelect={handleSelect} />
      <HighchartsFlags data={data} />
    </div>
  );
}

export default App;
