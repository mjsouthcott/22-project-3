import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar } from '@material-ui/core'

function VehicleAvatar (props) {
  const useStyles = makeStyles({
    avatar: {
      backgroundColor: props.backgroundColor,
      height: 100,
      width: 100
    },
    img: {
      width: props.imageWidth
    }
  })
  const classes = useStyles()

  return (
    <Avatar className={classes.avatar}>
      <img className={classes.img} src={props.icon} alt={props.type} />
    </Avatar>
  )
}

export default VehicleAvatar