import React from 'react'
import { Avatar } from '@material-ui/core'

function VehicleAvatar (props) {
  const avatarStyle = {
    backgroundColor: props.backgroundColor,
    height: 100,
    width: 100
  }
  const imageStyle = {
    width: props.imageWidth
  }

  return (
    <Avatar  style={avatarStyle}>
      <img src={props.icon} alt={props.type} style={imageStyle}/>
    </Avatar>
  )
}

export default VehicleAvatar