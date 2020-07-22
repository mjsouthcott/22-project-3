import React, { useEffect, useState } from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import Title from '../Title';
import API from "../../utils/API";

export default function BarCharts() {

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    API.getRepairRequests()
      .then(res => {
        let dataArray = [{name: 'Not Yet Assigned', "Repair Requests": 0}]
        let techNameArray = ['Not Yet Assigned']
        let techName = ''
        res.data.forEach(element => {
          if (element.assignedTo){
            techName = `${element.assignedTo.firstName} ${element.assignedTo.lastName}` 
          }
          else techName = 'Not Yet Assigned'

          if (!techNameArray.includes(techName))
          {
            dataArray.push({name: techName, "Repair Requests": 1})
            techNameArray.push(techName)
          }
          else
          {
            dataArray = dataArray.map(ele => {
              if (ele.name === techName)
              {
                ele["Repair Requests"] +=1
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
      <Bar dataKey="Repair Requests" fill={'blue'}/>
    </BarChart>
    </ResponsiveContainer>
    </React.Fragment>
  );
}