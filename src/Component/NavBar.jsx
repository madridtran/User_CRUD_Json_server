import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { NavLink } from 'react-router-dom'
const useStyle = makeStyles({
    header:{
        background: '#00868B'
    },
    tabs: {
        color:'#FFFFFF',
        textDecoration: 'none',
        marginRight: 15,
        fontSize: 18,
        

    }
})
const NavBar = () => {
    const classes = useStyle();
  return (
    <AppBar className={classes.header} position="static">
        <Toolbar>
            <NavLink className={classes.tabs} to="./" exact="true">
            AgileTech
            </NavLink>
            <NavLink  className={classes.tabs} to="/all" exact="true">
            All User
            </NavLink> 
            <NavLink className={classes.tabs} to="/add" exact="true">
            Add User
            </NavLink>
        </Toolbar>
    </AppBar>
  )
}

export default NavBar