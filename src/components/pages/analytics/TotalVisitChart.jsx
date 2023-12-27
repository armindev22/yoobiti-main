import React from "react";
import ReactApexChart from "react-apexcharts";

const TotalVisitChart = () => {
  const state = {
    series: [
      {
        data: [0, 1600, 800, 940, 740, 355, 428, 1941, 546, 2050],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        colors: ["#A953FF"],
      },
      title: {
        text: "Total Website Visit",
        style: {
          fontSize: "18px",
          fontWeight: "bold",
          color: "#263238",
        },
      },

      xaxis: {
        // type: "datetime",
        categories: [
          "2023 feb 1",
          "2023 feb 5",
          "2023 feb 8",
          "2023 feb 12",
          "2023 feb 9",
          "2023 feb 16",
          "2023 feb 20",
          "2023 feb 23",
          "2023 feb 27",
          "2023 feb 30",
        ],
        labels: {
          style: {
            colors: "#AEAEAE",
            fontWeight: 500,
            fontSize: "14px",
          },
        },
        // axisBorder: {
        //   show: false,
        // },
        // lines: {
        //   show: false,
        // },
        // axisTicks: {
        //   show: false,
        // },
      },
      //   yaxis: {
      //     axisBorder: {
      //       show: false,
      //     },
      //     axisTicks: {
      //       show: false,
      //     },
      //     labels: {
      //       show: false,
      //     },
      //   },
      yaxis: {
        labels: {
          style: {
            colors: ["#AEAEAE"],
            fontWeight: 500,
            fontSize: "14px",
          },
        },
      },
      markers: {
        colors: ["#A953FF"],
      },
    },
  };

  return (
    <div
      id="chart"
      className="rounded-md p-3"
      style={{
        boxShadow: " 0px 0px 50px 0px rgba(0, 0, 0, 0.05)",
      }}
    >
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default TotalVisitChart;
