import { Table,TableBody,TableCell, TableHead, TableRow,styled,Button } from '@mui/material'
import { useState } from 'react'
import {React,useEffect,useContext} from 'react'
import { getUsers,deleteUser,addUser } from '../Service/api'
import {Link,useNavigate} from 'react-router-dom'
import AppContext from '../AppContext'
const AllUsers =({name,username,email,phone})=>{



  const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
     
    }
`;


  const[users,setUsers] = useState([])
  const navigate = useNavigate();

  useEffect(()=>{   // useEffect works as soon as the component loads.
    getUsersDetails();
  },[])

  const getUsersDetails =async () =>{
    let response = await getUsers();
    console.log(response)
    setUsers(response.data)
  }



  const deleteUserDetails= async(id)=>{
 await deleteUser(id);
 getUsersDetails() //after deleting ui does not get updated, making ui call helps to read the data present in json server

  }
  return (
    <StyledTable>
    <TableHead>
        <THead>
        <TableCell>Id</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>User Name</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Phone</TableCell>
        </THead>
            </TableHead>
    <TableBody>
      {
        users.map(user =>(
          <TRow >
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <Button  variant="outlined" color ="primary" style={{marginRight:10}}  component={Link} to={"/add"}>Add</Button> 
            <Button disabled={users.length<=1} variant="outlined" color ="error" style={{marginRight:10}} onClick={()=> deleteUserDetails(user.id)}>Delete</Button> 
            <Button variant="outlined" color='secondary'  component={Link} to={`/edit/${user.id}`}>Edit</Button> {/*create a route button using link from react-router-dom */}
              

          </TRow>
         
        ))
      }

    </TableBody>
    </StyledTable>
  )
}

export default AllUsers