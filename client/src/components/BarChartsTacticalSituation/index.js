import React, { useEffect, useState } from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import Title from '../Title';
import API from "../../utils/API";

export default function BarCharts() {

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    API.getRepairRequests()
      .then(res => {
        let dataArray = [{Name: 'Local Tactical Situation', Hostile : 0, Safe : 0}]
        res.data.forEach(element => {
          if (element.localTacticalSituation === 'Hostile') dataArray[0].Hostile +=1
          else dataArray[0].Safe +=1
        });
        setChartData(dataArray)
      })
  }, [])


  return (
    <React.Fragment>
    <Title>Requests by Local Tactical Situation</Title>
    <ResponsiveContainer>
    <BarChart
      width={250}
      height={200}
      data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Hostile" fill={'red'}/>
      <Bar dataKey="Safe" fill={'green'}/>
    </BarChart>
    </ResponsiveContainer>
    </React.Fragment>
  );
}