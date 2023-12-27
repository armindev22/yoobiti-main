import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const UsersChart = () => {
  const [series, setSeries] = useState([2345, 33389]);

  const options = {
    chart: {
      width: 350,
      type: "donut",
      height: "100%",
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    legend: {
      position: "bottom",
      offsetY: 0,
      offsetX: 0,
      labels: {
        colors: undefined,
        useSeriesColors: false,
      },
      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: "#198953",
        fillColors: ["#F0F3FD", "#198953"],
        radius: 12,
      },
    },
    states: {
      hover: {
        filter: { type: "none" },
      },
      active: {
        filter: { type: "none" },
      },
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,

            value: {
              show: true,
              fontSize: "24px",
              fontWeight: 600,
              color: "#0B2041",
              offsetY: 8,
            },
            total: {
              showAlways: true,
              show: true,
              label: "Product",
              color: "#AEAEAE",
              fontWeight: 500,
              fontSize: "14px",
            },
          },
        },
      },
    },
    title: {
      text: "Users",
      align: "left",
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: "18px",
        fontWeight: "bold",
        fontFamily: undefined,
        color: "#263238",
      },
    },

    fill: {
      colors: ["#198953", "#F0F3FD"],

      type: ["solid", "gradient"],
    },
    labels: ["33,389 Users", "2,345 Buyer"],
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
        options={options}
        series={series}
        type="donut"
        width={350}
        height={"100%"}
        className="flex justify-center items-center"
      />
    </div>
  );
};

export default UsersChart;
