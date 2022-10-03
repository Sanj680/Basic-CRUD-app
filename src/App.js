
import './App.css';
import AddUser from './Components/AddUser';
import AllUsers from './Components/AllUsers';
import Code from './Components/Code';
import NavBar from './Components/Navbar';
import EditUser from './Components/EditUser';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './NestedComponents/Dashboard';
import List from './NestedComponents/List'
import { AppProvider } from './AppContext';
function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <AppProvider>
      <NavBar/>
      <Routes>
      <Route path ="/" element={<Code/>} >
         <Route path="dashboard" element={<Dashboard />} />
          <Route path="list" element={<List/>}/>
      </Route>
      <Route path ="/all" element={<AllUsers/>} />
      <Route path ="/add" element={<AddUser/>} />
      <Route path="/edit/:id" element={<EditUser />} />  {/*uniquely editing the rows based on id*/}
      </Routes>
      </AppProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
