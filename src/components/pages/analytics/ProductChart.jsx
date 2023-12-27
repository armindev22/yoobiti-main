import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ProductChart = () => {
  const [series, setSeries] = useState([334, 4400]);

  const options = {
    chart: {
      width: 350,
      type: "donut",
      height: 350,
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
        strokeColor: "#A953FF",
        fillColors: ["#F0F3FD", "#A953FF"],
        radius: 12,
        colors: ["#F0F3FD", "#A953FF"],
        // discrete: [
        //   {
        //     seriesIndex: 0,
        //     dataPointIndex: 7,
        //     fillColor: "#F0F3FD",
        //     strokeColor: "#fff",
        //     size: 5,
        //     shape: "circle", // "circle" | "square" | "rect"
        //   },
        //   {
        //     seriesIndex: 2,
        //     dataPointIndex: 11,
        //     fillColor: "#A953FF",
        //     strokeColor: "#eee",
        //     size: 4,
        //     shape: "circle", // "circle" | "square" | "rect"
        //   },
        // ],
      },
    },
    // tooltip: {
    //   fillSeriesColor: false,
    //   onDatasetHover: {
    //     highlightDataSeries: false,
    //   },
    // },
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
      text: " products",
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
    states: {
      hover: {
        filter: { type: "none" },
      },
      active: {
        filter: { type: "none" },
      },
    },

    fill: {
      colors: ["#A953FF", "#F0F3FD"],

      type: ["solid", "gradient"],
    },
    labels: ["4,400 Unsold products", "334 Products sold"],
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
        height={350}
        className="flex justify-center items-center"
      />
    </div>
  );
};

export default ProductChart;
