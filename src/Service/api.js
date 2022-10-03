import axios from 'axios';  //axios is a library used to make api calls

const API_URL='http://localhost:5000/users'

export const addUser = async (data)=>{   //post for adding the data
    try{
    return await axios.post(API_URL,data);
    }
    catch(error){
        console.log('Error calling adduser api' , error.message)
    }
}


export const getUsers = async ()=>{    //get for reading the data
    try{
    return await axios.get(API_URL);
    }
    catch(error){
        console.log('Error calling getusers api' , error.message)
    }
}



export const getUser = async (data)=>{    //getting single user while editing particular user.
    try{
    return await axios.get(`${API_URL}/${data}`);
    }
    catch(error){
        console.log('Error calling editusers api' , error.message)
    }
}

export const editUser = async (data,id) => { //put for updating or editing the data
    try{
        return await axios.put(`${API_URL}/${id}`, data)
    }catch(error){
        console.log('Error calling editusers api' , error.message)
    }
    }

    export const deleteUser = async(id)=>{ //delete for deleting the data. //async returns a promise
        try{
          return await axios.delete(`${API_URL}/${id}`)  // so we need to use await to get a response.
        }
        catch(error){
            console.log('Error calling deleteusers api') // we use second argument while updating info, saving info etc.
        }
    }
    



