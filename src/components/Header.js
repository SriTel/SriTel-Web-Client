import React from "react";
import {  IconButton, Typography,Button, Avatar } from "@mui/material"
import { useNavigate } from 'react-router';
import { Stack } from "@mui/system";
import ProfileImage from "../assests/profileimage.jpg"
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import ChatIcon from '@mui/icons-material/Chat';
import DescriptionIcon from '@mui/icons-material/Description';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';


const Header = () => {
    const navigate = useNavigate("")
    
    // directs to login page (when click on the logout button)
    const logout = () => {
        navigate("/login")
    }
    // home page
    const homepage = () => {
        navigate("/home")
    }
    // chat 
    const chat = () => {
        navigate("/chat")
    }
    // bills 
    const bills = () => {
        navigate("/bills")
    }
    // services 
    const services = () => {
        navigate("/services")
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'black', padding: '2%' }}>
            <Stack sx={{display:'flex', flexDirection:'row', width:'30%'}}>
                <Avatar
                    src={ProfileImage}
                     />
                <Stack >
                    <Typography sx={{ color: 'white' }}>+ 94 71 2234578</Typography>
                    <Typography sx={{ color: 'white' }}>Dedunu Perera</Typography>
                </Stack>
            </Stack>

            <Stack sx={{ width:'30%', display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                <IconButton onClick={bills}><DescriptionIcon sx={{color:'white'}} /></IconButton>
                <IconButton onClick={services}><AutoAwesomeMotionIcon sx={{color:'white'}}  /></IconButton>
                <IconButton onClick={homepage}><HomeIcon sx={{color:'white'}}  /></IconButton>
                <IconButton onClick={chat}><ChatIcon sx={{color:'white'}}  /></IconButton>
                <IconButton><SettingsIcon sx={{color:'white'}}  /></IconButton>
            </Stack>

            <Stack sx={{ width:'30%'}}>
                <Button onClick={logout} sx={{ color: 'black', backgroundColor: 'white', ':hover': { backgroundColor: 'white' }, width:'30%', marginLeft:'70%'}}>Logout</Button>
            </Stack>

        </div >
    )
}

export default Header;