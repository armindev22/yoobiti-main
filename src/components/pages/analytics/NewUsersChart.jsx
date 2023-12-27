import React from "react";
import ReactApexChart from "react-apexcharts";

const NewUsersChart = () => {
  const series = [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42],
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
      // sparkline: {
      //   enabled: false,
      // },
    },
    dataLabels: {
      enabled: false,
      style: {
        colors: ["#9350E8"],
      },
    },
    grid: {
      show: false,
    },
    stroke: {
      curve: "smooth",
      colors: ["#9350E8"],
    },
    xaxis: {
      type: "category",
      tickPlacement: "on",
      categories: ["sep 1", "sep 8", "sep 15", "sep 22", "sep 29"],
      lines: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#AEAEAE",
          fontWeight: 500,
          fontSize: "14px",
        },
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
    title: {
      text: "New Users",
      style: {
        fontSize: "18px",
        fontWeight: "bold",
        color: "#263238",
      },
    },
    fill: {
      type: "gradient",
      colors: "#9350E8",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    // tooltip: {
    //   x: {
    //     show: false,
    //   },
    // },
    markers: {
      colors: ["#9350E8"],
    },

    // tooltip: {
    //   x: {
    //     format: "dd/MM/yy HH:mm",
    //   },
    // },
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
        type="area"
        height={350}
      />
    </div>
  );
};

export default NewUsersChart;
