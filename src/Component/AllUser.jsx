import {
  Button,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getUsers,deleteUser } from "../Service/api";
import EditOffTwoToneIcon from "@mui/icons-material/EditOffTwoTone";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import { async } from "q";

const useStyle = makeStyles((theme) => ({
  table: {
    width: "90%",
    margin: "50px 0 0 50px",
  },
  thead: {
    background: "#00CDCD",
  },
  tr: {
    marginRight: "4px",
    "&:hover, &.Mui-focusVisible": {
       backgroundColor: "#5F9EA0" }
  }
}));

const AllUser = () => {
  const classes = useStyle();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    const res = await getUsers();
    setUsers(res.data); 
  };
  const handelDeleteUser = async (id) => {
     await deleteUser(id);
    getAllUsers();
  }
  return (
    <Table className={classes.table}>
      <TableHead className={classes.thead}>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>UserName</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Link to={`/edit/${user.id}`}>
            <IconButton aria-label="delete" className={classes.tr}>
            <EditOffTwoToneIcon  />
              </IconButton>
              </Link>
              <IconButton aria-label="delete" className={classes.tr}  onClick={()=> handelDeleteUser(user.id)}>
                <DeleteIcon/>
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AllUser;
