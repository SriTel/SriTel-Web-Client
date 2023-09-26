import { Avatar, Typography, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Profile from '../assests/admin.jpg'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';

const Chat = () => {
    return (
        <div style={{ width: '95%', height: 'auto', borderRadius: '10px', marginTop: '1%', padding: '2%', marginLeft: '1%' }}>

            <div style={{ padding: '1%', borderRadius: '10px', border: 'solid black', width: '50%', marginLeft: '20%', marginRight: '2%', marginTop: '1%', marginBottom: '1%' }}>
                <Stack sx={{ display: 'flex', flexDirection: 'row', marginTop: '1%', marginBottom: '2%' }}>
                    <ArrowBackIcon />
                    <Avatar src={Profile} />
                    <Typography>Telco Support</Typography>
                </Stack>
                <hr style={{ width: '100%', borderTop: '2px solid black', margin: '5px 0' }} />
                <div style={{ backgroundColor: '#f0f0f5', padding: '2%',maxHeight: '300px', overflowY: 'auto'  }}>
                    <div style={{ backgroundColor: 'white', padding: '2%', borderRadius: '10px', width: '50%', marginBottom: '1%' }}>
                        <Typography sx={{ fontWeight: 'bold' }}>Can I help you?</Typography>
                        <Typography sx={{ marginLeft: '70%', fontSize: '12px', fontWeight: 'bold' }}>09:30:32 am</Typography>
                    </div>
                    <div style={{ backgroundColor: 'blue', padding: '2%', borderRadius: '10px', color: 'white', marginLeft: '45%', width: '50%', marginBottom: '1%' }}>
                        <Typography sx={{ fontWeight: 'bold' }}>Can I help you?</Typography>
                        <Typography sx={{ marginLeft: '70%', fontSize: '12px', fontWeight: 'bold' }}>09:30:32 am</Typography>
                    </div>
                </div>
                <div style={{marginTop:'4%', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <TextField
                        sx={{ width: '80%', borderRadius:'5%' }}
                        id="outlined-helperText"
                        defaultValue=""
                        placeholder="Mobile Number"
                        required
                    />
                    <SendIcon sx={{fontSize:'40px', color:'white', backgroundColor:'blue', borderRadius:'50%', padding:'1%'}} />


                </div>
            </div>
        </div>
    )
}
export default Chat