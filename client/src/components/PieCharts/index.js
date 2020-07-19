import React, { useEffect, useRef, useState } from 'react';
import {PieChart, Pie, Cell} from 'recharts';
import API from "../../utils/API";


// const data = [
//   { name: 'Open', value: 10 },
//   { name: 'Progress', value: 12 },
//   { name: 'Done', value: 8 },
// ];

const COLORS = ['red', 'khaki', 'green'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
cx, cy, midAngle, innerRadius, outerRadius, percent,}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function PieCharts() {

  const [chartData, setChartData] = useState([])

  useEffect(() => {
    API.getRepairRequests()
      .then(res => {

        let openOrderNum = 0
        let progressOrderNum = 0
        let finishedOrderNum = 0
      
        res.data.forEach(element => {
          if (element.status === 'Open') openOrderNum +=1
          else if (element.status === 'Work In Progress') progressOrderNum +=1
          else finishedOrderNum +=1
        });

        const data = [
          { name: 'Open', value: openOrderNum },
          { name: 'Progress', value: progressOrderNum },
          { name: 'Done', value: finishedOrderNum },
        ];


        setChartData(data)
      })
  }, [])


  return (
    <PieChart width={200} height={200}>
      <Pie
        data={chartData}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {
          chartData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
        }
      </Pie>
    </PieChart>
  );
}
