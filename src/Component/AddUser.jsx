import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import {addUser,getUsers} from '../Service/api'
import {useNavigate} from 'react-router-dom'
const useStyle = makeStyles({
    container:{
        width:'50%',
        margin:'5% 0 0 25%',
        '& > *':{
            marginTop: 15
        }
    }
})
const initialValues = {
    name:'',
    username:'',
    email:'',
    phone:'',
}
const AddUser = () => {
    const [user, setUser] = useState(initialValues)
    const {name, username, email, phone} = user;
    const classes = useStyle()
    const navigate = useNavigate();
    const handleValueChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value})
    }   

    const addUserDetails = async () => {
      await addUser(user);
      navigate("../all", { replace: true });

    }
  return (
    <FormGroup className={classes.container}>
        <Typography variant='h4'>Add User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e)=>handleValueChange(e)} name="name" value={name}/>
        </FormControl>
        <FormControl>
            <InputLabel>Username</InputLabel>
            <Input onChange={(e)=>handleValueChange(e)} name="username" value={username}/>
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e)=>handleValueChange(e)} name="email" value={email}/>
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e)=>handleValueChange(e)} name="phone" value={phone}/>
        </FormControl>
        <Button variant="contained" color='primary' onClick={addUserDetails}>Add User</Button>
    </FormGroup>
  )
}

export default AddUser