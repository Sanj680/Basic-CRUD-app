import react, { useState ,useEffect} from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { getUser,editUser } from '../Service/api';
import { useNavigate, useParams } from 'react-router-dom';


const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const EditUser = () => {
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    const {id} = useParams(); // id is a param useful for editing and deleting data,useParams help to destructure the object and directly get access to the id.



    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = async()=>{
        let response = await getUser(id)  // to get a single user while editing the data for a single user.
        setUser(response.data)  //response is an object in itself.

    }

   

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const editUserData = async() => {
       await editUser(user,id)
        navigate('/all')
       
    }


    

    return (
        <Container>
            <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={user.name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={user.username} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={user.email}  id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={user.phone} id="my-input" />
            </FormControl>
            <FormControl>
            <Button variant="contained" color="primary" onClick={() => editUserData()}>Edit User</Button>
            </FormControl>
        </Container>
    )
}

export default EditUser;