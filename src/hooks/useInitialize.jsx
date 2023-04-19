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
      },
    ],
    chart: {
      className: "chart",
      height: "800px",
      type: "line",
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
      x: -28,
      y: 10,
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
  return options;
}
