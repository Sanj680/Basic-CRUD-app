import { createContext , useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "./Service/api";
const AppContext = createContext () ;

export function AppProvider ({children}) {
  const [items,setItems]=useState([]) ;

  const navigate = useNavigate();

  useEffect(()=>{   // useEffect works as soon as the component loads.
    getUsersDetails();
  },[])

  const getUsersDetails =async () =>{
    let response = await getUsers();
    console.log(response)
    setItems(response.data)
  }

 return (
    <AppContext.Provider value = {{items,setItems}}>
      {children}
    </AppContext.Provider>
 ) };
export default AppContext ;