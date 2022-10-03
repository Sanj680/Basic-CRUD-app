import { AppBar, Toolbar, Typography,styled } from '@mui/material';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AppContext from '../AppContext';

const Header = styled(AppBar)`
    background: #111111;
`;
    
const Tabs = styled(NavLink)`
    color: #FFFFFF;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
`;

const NavBar = () => {
 
    const{items}= useContext(AppContext)
    return (
        <Header position='static'>
            <Toolbar>
                <Tabs to="/">Code</Tabs>
                <Tabs to="/all">All User</Tabs>
              <p>Users: {items.length}</p>
            </Toolbar>
        </Header>
       
    )
}

export default NavBar;