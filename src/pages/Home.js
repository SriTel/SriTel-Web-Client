import React from "react";
import { Typography, Button, TextField, Box } from "@mui/material"
import { useNavigate } from 'react-router';
import { Stack } from "@mui/system";
import FirstImage from "../assests/main.jpg"
import HistoryIcon from '@mui/icons-material/History'; //history
import InventoryIcon from '@mui/icons-material/Inventory'; //addons
import DonutLargeIcon from '@mui/icons-material/DonutLarge'; //balance

const Home = () => {
    return (
        <div>
            <Stack sx={{ marginLeft: '35%', marginTop: '1%' }}>
                <img src={FirstImage} style={{ width: '35%', borderRadius: '10px' }} />
            </Stack>

            <Stack sx={{ marginLeft: '2%', marginRight: '2%', marginTop: '1%', marginBottom: '1%', backgroundColor: '#F0F0F5', borderRadius: '10px', padding: '2%' }}>
                <Typography sx={{fontWeight:'bold'}}>Quick Actions</Typography>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Box sx={{ backgroundColor: 'white', height: '10%', width: '10%', borderRadius: '10px', paddingLeft: '2%', paddingRight: '2%', paddingTop: '1%', paddingBottom: '1%', textAlign: 'center' }}>
                        <DonutLargeIcon sx={{fontSize:'60px',color:'blue'}}/>
                        <Typography sx={{textAlign:'center'}}>Balance</Typography>
                    </Box>
                    
                    <Box sx={{ backgroundColor: 'white', height: '10%', width: '10%', borderRadius: '10px', paddingLeft: '2%', paddingRight: '2%', paddingTop: '1%', paddingBottom: '1%', textAlign: 'center' }}>
                    <InventoryIcon sx={{fontSize:'60px',color:'blue'}}/>
                        <Typography sx={{textAlign:'center'}}>Add-Ons</Typography>
                    </Box>

                    <Box sx={{ backgroundColor: 'white', height: '10%', width: '10%', borderRadius: '10px', paddingLeft: '2%', paddingRight: '2%', paddingTop: '1%', paddingBottom: '1%', textAlign: 'center' }}>
                    <HistoryIcon sx={{fontSize:'60px',color:'blue'}}/>
                        <Typography sx={{textAlign:'center'}}>History</Typography>
                    </Box>
                </div>
            </Stack>

            <Stack sx={{ marginLeft: '2%', marginRight: '2%', marginTop: '1%', marginBottom: '1%', backgroundColor: '#F0F0F5', borderRadius: '10px', padding: '2%' }}>
                <Typography sx={{ fontWeight: 'bold' }}>Feature Packages</Typography>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Box sx={{ backgroundColor: '#FF3D00', height: '10%', width: '10%', borderRadius: '10px', paddingLeft: '2%', paddingRight: '2%', paddingTop: '1%', paddingBottom: '1%', textAlign: 'center' }}>
                        <Typography sx={{ fontSize: '40px', color: 'white' }}>1 GB</Typography>
                        <Typography sx={{ fontWeight: 'bold', color: 'white' }}>Rs. 100</Typography>
                    </Box>

                    <Box sx={{ backgroundColor: '#4890FC', height: '10%', width: '10%', borderRadius: '10px', paddingLeft: '2%', paddingRight: '2%', paddingTop: '1%', paddingBottom: '1%', textAlign: 'center' }}>
                        <Typography sx={{ fontSize: '40px', color: 'white' }}>1 GB</Typography>
                        <Typography sx={{ fontWeight: 'bold', color: 'white' }}>Rs. 100</Typography>
                    </Box>

                    <Box sx={{ backgroundColor: '#9858FF', height: '10%', width: '10%', borderRadius: '10px', paddingLeft: '2%', paddingRight: '2%', paddingTop: '1%', paddingBottom: '1%', textAlign: 'center' }}>
                        <Typography sx={{ fontSize: '40px', color: 'white' }}>1 GB</Typography>
                        <Typography sx={{ fontWeight: 'bold', color: 'white' }}>Rs. 100</Typography>
                    </Box>

                </div>
            </Stack>
        </div>
    )
}
export default Home;