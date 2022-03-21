import React from 'react';
import './Nav.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'


const Nav = () => {
    const {user, logOut} = useAuth()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Link className='nav-ancor' to="/home"><Button color="inherit">Home</Button></Link>
                    <Link className='nav-ancor' to="/appoinment"><Button color="inherit">Appoinment</Button></Link>
                    <Link className='nav-ancor' to="/contact"><Button color="inherit">Contact us</Button></Link>
                    {
                        user?.email ?
                        <Button onClick={logOut} color="inherit">Logout</Button>
                        :
                        <Link className='nav-ancor' to="/login"><Button color="inherit">Login</Button></Link>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Nav;