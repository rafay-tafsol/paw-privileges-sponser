import React from "react";
import { Line } from "react-chartjs-2";
import classes from "./Chart.module.css";

const LineChart = () => {
  const data = {
    // ...chart data...
  };

  const options = {
    // ...chart options...
  };

  return (
    <div className={classes.lineChart}>
      <Line data={data} options={options} className={classes.canvas} />
    </div>
  );
};

export default LineChart;
