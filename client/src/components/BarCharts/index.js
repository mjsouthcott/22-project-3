import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { useTheme } from '@material-ui/core/styles';

const data = [
    {time: 'Day 1', Open: 4, Progress: 2, Done:0},
    {time: 'Day 2', Open: 6, Progress: 4, Done:1},
    {time: 'Day 3', Open: 7, Progress: 6, Done:3},
    {time: 'Day 4', Open: 3, Progress: 8, Done:4},
    {time: 'Day 5', Open: 1, Progress: 7, Done:5},
    {time: 'Day 6', Open: 4, Progress: 5, Done:6},
    {time: 'Day 7', Open: 4, Progress: 7, Done:8}];

export default function BarCharts() {
    const theme = useTheme();
    return (
      <BarChart
        width={250}
        height={200}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Open" fill={'red'}/>
        <Bar dataKey="Progress" fill={'khaki'} />
        <Bar dataKey="Done" fill={'green'} />
      </BarChart>
    );
}