import React from "react";
import ReactApexChart from "react-apexcharts";

const SalesChart = () => {
  const series = [
    {
      data: [18, 18, 23, 16, 19, 21],
    },
  ];

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        distributed: true,
        columnWidth: "40%",
        endingShape: "rounded",
        startingShape: "rounded",
      },
    },
    stroke: {
      width: 2,
    },
    legend: { show: false },
    grid: {},
    dataLabels: { enabled: false },

    colors: ["#EEF2F8"],
    states: {
      hover: {
        filter: { type: "none" },
      },
      active: {
        filter: { type: "none" },
      },
    },
    xaxis: {
      show: true,
      categories: ["sep 1", "sep 7", "sep 12", "sep 18", "sep 23", "sep 29"],
      tickPlacement: "off",
      labels: {
        show: true,
        style: {
          colors: "#AEAEAE",
          fontWeight: 500,
          fontSize: "14px",
        },
      },
      axisTicks: { show: false },
      axisBorder: { show: false },
      crosshairs: {
        show: true,
      },
      fill: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      tickAmount: 4,
      labels: {
        offsetX: -17,
        formatter: (value) =>
          `${value > 999 ? `${(value / 1000).toFixed(0)}` : value}k`,
      },
    },
    grid: {
      show: false,
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
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default SalesChart;
