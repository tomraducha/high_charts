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
      borderBottom: "10px solid black",
      events: {
        render: function () {
          const yAxis = this.yAxis[0];
          yAxis.removePlotLine("min-line");
          yAxis.removePlotLine("max-line");
          yAxis.addPlotLine({
            id: "min-line",
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
            id: "max-line",
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
      inputPosition: {
        align: "center",
        y: -40,
      },

      verticalAlign: "top",
      labelStyle: {
        display: "none",
      },
      dropdown: "always",
      buttons: [
        {
          type: "day",
          count: 1,
          text: "Jour",
        },
        {
          type: "month",
          count: 1,
          text: "Mois",
        },
        {
          type: "month",
          count: 3,
          text: "3 mois",
        },
        {
          type: "month",
          count: 6,
          text: "6 mois",
        },
        {
          type: "year",
          count: 1,
          text: "Année",
        },
        {
          type: "all",
          text: "TimeRangeSelector",
        },
      ],
      inputEnabled: true,
      inputDateFormat: "%d %b %Y",
      inputEditDateFormat: "%d %b %Y",
      inputBoxWidth: 120,
      inputBoxHeight: 18,
      inputStyle: {
        fontSize: "10px",
      },
      labelStyle: {
        display: "none",
      },
      dateTimeLabelFormats: {
        day: "%e %b %Y",
        week: "%e %b %Y",
        month: "%b %Y",
        year: "%Y",
      },
      selected: 4,
      buttonTheme: {
        width: 160,
        zIndex: 99,
        "stroke-width": 1,
        stroke: "grey",
        r: 2,
        style: {
          fontSize: "19px",
          border: "solid 1px black",
          color: "grey",
        },
      },
    },

    title: {
      useHTML: true,
      text: `<img src=${Period} alt='' />`,
    },

    series: [
      {
        name: "Température",
        data: data,
        id: "dataseries",
        color: "rgba(161, 234, 180)",
        fillOpacity: 0.5,
      },
      {
        yAxis: 0,
      },
      {
        yAxis: 1,
      },
    ],

    yAxis: [
      {
        lineWidth: 1,
        opposite: true,
      },
      {
        lineWidth: 1,
        title: {
          text: "Température",
          style: {
            fontSize: "15px",
          },
        },
        opposite: false,
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
