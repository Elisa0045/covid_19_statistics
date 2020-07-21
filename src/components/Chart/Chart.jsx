import React, { useState, useEffect } from "react"; //set up Api
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = () => {
  const [dailyData, setDailyData] = useState({});
  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  });

  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData(({ date }) => date),

        datasets: [
          {
            data: dailyData(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData(({ deaths }) => deaths),
            label: "Infected",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",

            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return <h1>Chart</h1>;
};
export default Chart; //set up Api
