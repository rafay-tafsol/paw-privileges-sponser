"use client";

import React from "react";
import classes from "./Chart.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { mergeClass } from "@/resources/utils/helper";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const getOptions = (showXGrid) => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return context.raw;
        },
      },
      titleFont: {
        size: 16,
      },
      bodyFont: {
        size: 14,
      },
    },
  },
  elements: {
    point: {
      radius: 6,
    },
  },
  scales: {
    x: {
      grid: {
        display: showXGrid,
      },
    },
  },
});

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    // {
    //   label: "",
    //   data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
    //   borderColor: "var(--main-color)",
    //   backgroundColor: "var(--main-color)",
    // },
    {
      label: "",
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: "#E5C0BD",
      backgroundColor: "#E5C0BD",
    },
  ],
};

export default function LineChart({ className, showXGrid = false }) {
  return (
    <div className={mergeClass(classes.lineChart, className)}>
      <Line options={getOptions(showXGrid)} data={data} />
    </div>
  );
}
