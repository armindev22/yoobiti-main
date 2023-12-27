import React from "react";
import ReactApexChart from "react-apexcharts";

const NewUsersChart = () => {
  const state = {
    series: [
      {
        data: [31, 48, 28, 41, 50, 46, 55, 46, 29, 32],
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
        curve: "smooth",
        colors: ["#B7A92D"],
      },
      title: {
        text: "Financial transactions",
        style: {
          fontSize: "18px",
          fontWeight: "bold",
          color: "#263238",
        },
      },
      grid: {
        show: false,
      },

      xaxis: {
        categories: [
          "sep 1",
          "sep 5",
          "sep 7",
          "sep 9",
          "sep 12",
          "sep 15",
          "sep 19",
          "sep 23",
          "sep 26",
          "sep 29",
        ],
        labels: {
          style: {
            colors: "#AEAEAE",
            fontWeight: 500,
            fontSize: "14px",
          },
        },
        axisBorder: {
          show: false,
        },
        lines: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
      markers: {
        colors: ["#B7A92D"],
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

export default NewUsersChart;
