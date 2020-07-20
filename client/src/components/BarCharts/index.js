import React, { useEffect, useRef, useState } from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import Title from '../Title';
import API from "../../utils/API";

const data = [
    {time: 'Day 1', Open: 4, Progress: 2, Done:0},
    {time: 'Day 2', Open: 6, Progress: 4, Done:1},
    {time: 'Day 3', Open: 7, Progress: 6, Done:3},
    {time: 'Day 4', Open: 3, Progress: 8, Done:4},
    {time: 'Day 5', Open: 1, Progress: 7, Done:5},
    {time: 'Day 6', Open: 4, Progress: 5, Done:6},
    {time: 'Day 7', Open: 4, Progress: 7, Done:8}];

export default function BarCharts() {

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    API.getRepairRequests()
      .then(res => {
        let dataArray = [{name: 'unAssigned', requests: 0}]
        let techNameArray = ['unAssigned']
        let techName = ''
        res.data.forEach(element => {
          if (element.assignedTo){
            techName = element.assignedTo
          }
          else techName = 'unAssigned'

          if (!techNameArray.includes(techName))
          {
            dataArray.push({name: techName, requests: 1})
            techNameArray.push(techName)
          }
          else
          {
            dataArray = dataArray.map(ele => {
              if (ele.name === techName)
              {
                ele.requests +=1
              }
              return ele
            })
          }
        });

        setChartData(dataArray)
      })
  }, [])


  return (
    <React.Fragment>
    <Title>Requests # By Technician</Title>
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
      <Bar dataKey="requests" fill={'blue'}/>
    </BarChart>
    </ResponsiveContainer>
    </React.Fragment>
  );
}