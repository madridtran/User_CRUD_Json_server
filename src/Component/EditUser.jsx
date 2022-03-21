import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from '@material-ui/core'
import React, { useState ,useEffect} from 'react'
import {editUser,getUser} from '../Service/api'
import {useNavigate, useParams} from 'react-router-dom'
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
const EditUser = () => {
    const [user, setUser] = useState(initialValues)
    const {name, username, email, phone} = user;
    const {id} = useParams()
    const classes = useStyle()
    const navigate = useNavigate();
    const handleValueChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value})
    }   
    console.log(id);
    useEffect(() => {
        loadUserData();
      }, []);
      const loadUserData = async () => {
       const res = await getUser(id)
       setUser(res.data)
      };
    const editUserDetails = async () => {
      await editUser(id,user);
      navigate("../all", { replace: true });

    }
  return (
    <FormGroup className={classes.container}>
        <Typography variant='h4'>Edit User</Typography>
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
        <Button variant="contained" color='primary' onClick={editUserDetails}>Edit User</Button>
    </FormGroup>
  )
}

export default EditUser