import React from "react";
import { Alert, IconButton, Tab, Typography, Card, CardActionArea, CardContent, CardMedia, Button, InputLabel, TextField, Select, FormControl, MenuItem, Box } from "@mui/material"
import { useNavigate } from 'react-router';
import { Stack } from "@mui/system";

const Main = () => {
    const navigate = useNavigate("")
    // directs to signup page
    const signup = () => {
        navigate("/signup")
    }
    // directs to login page
    const login = () => {
        navigate("/login")
    }
    return (
        <div style={{ backgroundColor: 'blue', width: '100%', height: '100vh', position: 'fixed' }}>
            <Stack sx={{ display: 'flex', flexDirection: 'row', margin: '1%', marginLeft: '85%' }}>
                <Button onClick={login} sx={{ color: 'white', backgroundColor: 'black', padding: '3%', ':hover': { backgroundColor: 'black' }, marginRight: '1%', width: '50%' }}>Login</Button>
                <Button onClick={signup} sx={{ color: 'white', backgroundColor: 'black', padding: '3%', ':hover': { backgroundColor: 'black' }, width: '50%' }}> SignUp </Button>
            </Stack>

            <Stack sx={{ textAlign: 'center', marginTop: '7%' }}>
                <Typography sx={{ color: 'white', fontWeight: 'bold', marginBottom:'3%', fontSize:'30px' }}>Powered By</Typography>

                <Typography sx={{ fontWeight: 'bold', fontFamily: 'cursive', fontSize: '150px' }}>K<span style={{color:'white'}}>I</span>D<span style={{color:'white'}}>D</span>S</Typography>
            </Stack>

        </div>
    )
}

export default Main;