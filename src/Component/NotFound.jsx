import React from 'react'
import notFound from '../Assets/Images/notfound.png'
import { makeStyles } from '@material-ui/styles'
const useStyle = makeStyles({
    center : {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '50%'
        
      }
})
const NotFound = () => {
    const classes = useStyle()
  return (
    <img className={classes.center} src={notFound}  alt="NotFound" />
  )
}

export default NotFound