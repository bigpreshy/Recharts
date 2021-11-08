import React, { useState, useEffect } from "react";
import client from "./clientDetails";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function App() {
  const [covidData, setcovidData] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'covid']{
      confirmed,
      title,
      death
      }`
      )
      .then((data) => {
        setcovidData(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      {!covidData && <div>Loading</div>}
      {covidData && (
        <LineChart
          width={1000}
          height={400}
          data={covidData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
       

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="title" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="death"
            stroke="#8884d8"
            fill="#8884d8"
          />
           <Line
            type="monotone"
            dataKey="confirmed"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </LineChart>
      )}
    </div>
  );
}