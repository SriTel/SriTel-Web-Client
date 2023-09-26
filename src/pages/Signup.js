import React from "react";
import {  Typography, Button, TextField } from "@mui/material"
import { useNavigate } from 'react-router';
import { Stack } from "@mui/system";
import Image from "../assests/signup.png"


const Signup = () => {
    const navigate = useNavigate("")
    // directs to login page
    const login = () => {
        navigate("/login")
    }
    const verify = () => {
        navigate("/verifyotp")
    }
   
    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            
            <div style={{ width: '47%', height: '100vh', backgroundImage:`url(${Image})`}}></div>

            <div style={{ width: '47%', height: '50%', marginBottom: '1%', marginTop: '9%', marginLeft: '1%', marginRight: '1%', padding: '2%', backgroundColor: '#F0F0F5', borderRadius: '10px' }}>
                <Typography sx={{ fontSize: '40px', color: 'blue', fontWeight: 'bold' }}>Sign-Up</Typography>
                <hr style={{ width: '100%', borderTop: '2px solid blue', margin: '5px 0' }} />

                <div style={{ marginBottom: '2%',  marginTop:'2%' }}>
                    <TextField
                        id="outlined-textarea"
                        label=" Mobile Number "
                        placeholder="Mobile Number"
                        multiline
                        sx={{ width: '100%' }}
                    />
                </div>

                <div style={{ marginBottom: '2%' }}>
                    <TextField
                        type="password"
                        id="outlined-textarea"
                        label="Password"
                        placeholder="Password"
                        multiline
                        sx={{ width: '100%' }}
                    />
                </div>

                <div style={{ marginBottom: '2%' }}>
                    <TextField
                        type="password"
                        id="outlined-textarea"
                        label=" Reenter Password"
                        placeholder="Retype Password"
                        multiline
                        sx={{ width: '100%' }}
                    />
                </div>

                <div style={{ marginBottom: '2%' }}>
                    <Button onClick={verify} sx={{ backgroundColor: 'blue', ':hover': { backgroundColor: 'blue' }, width: '100%', padding: '2%', borderRadius: '10px', color: 'white' }}>
                        Signup
                    </Button>
                </div>

                <div style={{ marginLeft:'30%'}}>
                    <Stack sx={{display:'flex', flexDirection:'row'}}>
                        <Typography>Already have an account? </Typography>
                        <Button onClick={login} sx={{padding:'0'}}>Login</Button>
                    </Stack>
                </div>
            </div>
        </div >
    )
}

export default Signup;