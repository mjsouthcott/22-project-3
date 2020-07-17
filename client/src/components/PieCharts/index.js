import React from 'react';
import {PieChart, Pie, Cell} from 'recharts';


const data = [
  { name: 'Open', value: 10 },
  { name: 'Progress', value: 12 },
  { name: 'Done', value: 8 },
];

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
    return (
      <PieChart width={200} height={200}>
        <Pie
          data={data}
        //   cx={200}
        //   cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
    );
}
