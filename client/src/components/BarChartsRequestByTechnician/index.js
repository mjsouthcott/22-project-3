import React, { useEffect, useState } from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import Title from '../Title';
import API from "../../utils/API";

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
            techName = `${element.assignedTo.firstName} ${element.assignedTo.lastName}` 
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
    <Title>Requests by Technician</Title>
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