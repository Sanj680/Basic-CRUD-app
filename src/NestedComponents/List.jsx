
import {React,useContext} from 'react'
import '../App.css';
import AppContext from '../AppContext';



const List = (index) => {
  const{items,addToList}= useContext(AppContext)
  return (
    <div className='List'>
      <h2>You are inside the List Component</h2>
      <p>Total number of users are {items.length} !!!!</p>
   
     
    </div>
  )
}
  
export default List