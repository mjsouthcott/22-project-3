import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import Title from '../Title';
import API from '../../utils/API'

const data = [
  {time: 'Day 1', Open: 4, Progress: 2, Done:0},
  {time: 'Day 2', Open: 6, Progress: 4, Done:1},
  {time: 'Day 3', Open: 7, Progress: 6, Done:3},
  {time: 'Day 4', Open: 3, Progress: 8, Done:4},
  {time: 'Day 5', Open: 1, Progress: 7, Done:5},
  {time: 'Day 6', Open: 4, Progress: 5, Done:6},
  {time: 'Day 7', Open: 4, Progress: 7, Done:8}];

export default function LineCharts() {
  const theme = useTheme();

  // const [requests, setRequests] = useState([])

  // useEffect(() => {
  //   API.getRepairRequests()
  //     .then(res => {
  //       setRequests(res.data)
  //     })
  // }, [])


  return (
    <React.Fragment>
      <Title>Requests Status Over Time</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="createdAt" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Open" stroke={'red'} />
          <Line type="monotone" dataKey="Progress" stroke={'khaki'} />
          <Line type="monotone" dataKey="Done" stroke={'green'} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}