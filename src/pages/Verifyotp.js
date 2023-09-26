import React from "react";
import {  Typography, Button,  TextField,  } from "@mui/material"
import { useNavigate } from 'react-router';
import { Stack } from "@mui/system";
import Image from "../assests/verifyotp.jpg"


const Verifyotp = () => {
    const navigate = useNavigate("")
    const login = () => {
        navigate("/login")
    }
    
    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div style={{ width: '45%', height: '100vh', backgroundImage:`url(${Image})`}}></div>

            <div style={{ width: '47%', height: '50%', marginBottom: '1%', marginTop: '12%', marginLeft: '1%', marginRight: '1%', padding: '2%', backgroundColor: '#F0F0F5', borderRadius: '10px' }}>
                <Typography sx={{ fontSize: '40px', color: 'blue', fontWeight: 'bold' }}>Verify OTP</Typography>
                <hr style={{ width: '100%', borderTop: '2px solid blue', margin: '5px 0' }} />

                <Stack sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginBottom:'5%', marginTop:'5%'}}>
                    <TextField type="number" sx={{backgroundColor:'white', color:'black',  width:'10%', height:'10%'}} />
                    <TextField type="number" sx={{backgroundColor:'white', color:'black',  width:'10%', height:'10%'}} />
                    <TextField type="number" sx={{backgroundColor:'white', color:'black',  width:'10%', height:'10%'}} />
                    <TextField type="number" sx={{backgroundColor:'white', color:'black',  width:'10%', height:'10%'}} />
                    <TextField type="number" sx={{backgroundColor:'white', color:'black',  width:'10%', height:'10%'}} />
                </Stack>
  

                <div style={{ marginBottom: '2%' }}>
                    <Button onClick={login} sx={{ backgroundColor: 'blue', ':hover': { backgroundColor: 'blue' }, width: '100%', padding: '2%', borderRadius: '10px', color: 'white' }}>
                        Verify
                    </Button>
                </div>

            </div>
        </div >
    )
}

export default Verifyotp;