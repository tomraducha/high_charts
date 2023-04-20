import Period from "../images/Period.svg";
import Highcharts from "highcharts/highstock";
import HighchartsAccessibility from "highcharts/modules/accessibility";
HighchartsAccessibility(Highcharts);

export default function useInitialize(data) {
  const options = {
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
    chart: {
      className: "chart",
      height: "800px",
      type: "area",
      reflow: true,
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
            zIndex: 3,
            label: {
              text: "Min",
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
              text: "Max",
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
      inputDateFormat: "%e %B %y",
      inputBoxWidth: 160,
      inputBoxHeight: 18,
      inputStyle: {
        fontSize: "15px",
        color: "black",
      },
      selected: 7,
      buttonTheme: {
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
      x: -28,
      y: 10,
    },

    yAxis: [
      {
        floor: 15,
        ceiling: 100,
      },

      {
        lineWidth: 0,
        opposite: false,
      },
      {
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
  return options;
}
