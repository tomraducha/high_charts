import React, { useEffect, useState } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import HighchartsAccessibility from "highcharts/modules/accessibility";
import axios from "axios";
import Period from "../images/Period.svg";

HighchartsAccessibility(Highcharts);

function HighchartsFlags() {
  const [data, setData] = useState([]);

  const username = process.env.REACT_APP_USERNAME;
  const password = process.env.REACT_APP_PASSWORD;
  const url = process.env.REACT_APP_URL;

  useEffect(() => {
    const url =
      "https://cdn.jsdelivr.net/gh/highcharts/highcharts@v10.3.3/samples/data/usdeur.json";

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  useEffect(() => {
    async function fetchData() {
      let authString = username + ":" + password;
      let encodedAuthString = btoa(authString);
      try {
        const response = await axios.get(
          url + "/active_v2/history?retrieveValues=true",
          {
            headers: {
              mode: "cors",
              Authorization: "Basic cG9zdG1hbjpQb3N0bWFuMTIz",
            },
          }
        );
        const responseData = response.data;
        console.log(
          "🚀 ~ file: HighchartsFlags.jsx:36 ~ fetchData ~ responseDa-ta:",
          responseData
        );
        // setData(responseData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const options = {
    series: [
      {
        name: "Température",
        data: data,
        id: "dataseries",
      },
    ],
    chart: {
      type: "line",
      events: {
        render: function () {
          var yAxis = this.yAxis[0];
          yAxis.addPlotLine({
            color: "green",
            value: yAxis.dataMin,
            width: 2,
            dashStyle: "shortdash",
            label: {
              text: "Minimum",
              align: "right",
              x: -10,
              style: {
                color: "green",
              },
            },
          });
          yAxis.addPlotLine({
            color: "red",
            value: yAxis.dataMax,
            width: 2,
            dashStyle: "shortdash",
            label: {
              text: "Maximum",
              align: "right",
              x: -10,
              style: {
                color: "red",
              },
            },
          });
        },
      },
    },

    rangeSelector: {
      inputEnabled: false,
      buttonTheme: {
        width: 60,
      },
      labelStyle: {
        display: "none",
      },
      dropdown: "always",
      buttons: [
        {
          type: "day",
          count: 1,
          text: "1j",
        },
        {
          type: "week",
          count: 1,
          text: "1s",
        },
        {
          type: "month",
          count: 1,
          text: "1m",
        },
        {
          type: "year",
          count: 1,
          text: "1a",
        },
        {
          type: "all",
          text: "TimeRangeSelector",
        },
      ],
      selected: 4,
      buttonSpacing: 0,
      buttonPosition: {
        align: "left",
      },
      buttonTheme: {
        width: 60,
        zIndex: 99,
        "stroke-width": 1,
        stroke: "#ccc",
        r: 0,
        style: {
          color: "#333",
        },
        states: {
          hover: {
            fill: "#f7f7f7",
          },
          select: {
            fill: "#ccc",
          },
        },
      },
      dropdownWidth: 80,
      dropdownAlign: "right",
      dropdownButtonPosition: {
        align: "right",
        x: -36,
        y: -24,
      },
      dropdownItems: [
        {
          text: "Zoom avant",
          onclick: function () {
            this.zoomIn();
          },
        },
        {
          text: "Zoom arrière",
          onclick: function () {
            this.zoomOut();
          },
        },
      ],
    },

    plotOptions: {
      series: {
        color: "rgba(161, 234, 180)",
        fillOpacity: 0.5,
      },
    },

    title: {
      useHTML: true,
      text: `<img src=${Period} alt='' />`,
      style: {
        whiteSpace: "nowrap",
      },
    },

    series: [
      {
        name: "Température",
        data: data,
        id: "dataseries",
        color: "rgba(161, 234, 180)",
        fillOpacity: 0.5,
      },
    ],
  };

  return (
    <div>
      {data.length > 0 ? (
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={"stockChart"}
          options={options}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default HighchartsFlags;
