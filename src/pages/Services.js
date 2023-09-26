import React, { useState } from "react";
import { Typography, Button, Box, Tab, Tabs, MenuItem, IconButton } from "@mui/material"
import { Stack } from "@mui/system";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Switch from '@mui/material/Switch';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import CloseIcon from '@mui/icons-material/Close';
import Image1 from "../assests/c1.jpeg"
import Image2 from "../assests/c2.jpg"
import Learning1 from "../assests/learing1.jpeg"
import Learning2 from "../assests/learing2.jpeg"
import Learning3 from "../assests/learing3.jpg"
import Call1 from "../assests/call1.jpeg"
import Call2 from "../assests/call2.jpg"
import Call3 from "../assests/call3.jpeg"
import Data1 from "../assests/data1.jpg"
import Data2 from "../assests/data2.jpeg"
import Data3 from "../assests/data3.jpeg"

const Services = () => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const [present, setpresent] = useState(0);
    const handleForm = (event, existing_value) => {
        setpresent(existing_value);
    };

    const [select, setselect] = useState(false)
    // click on change button
    const changeButton = () => {
        setselect(true)
        setpresent(false)
    }
    // click on selete tune or close button
    const selectTune = () => {
        setselect(false)
        setpresent(2)
    }

    return (
        <div>
            <Box sx={{ width: '95%', marginTop: '1%', marginLeft: '6%' }}>
                <Tabs
                    value={present}
                    variant="fullWidth"
                    aria-label="Tab Component"
                    onChange={handleForm}
                    indicatorColor="transparent"
                >
                    <Tab sx={{ backgroundColor: present === 0 ? 'blue' : 'white', color: 'black', border: 'solid blue 1px', marginRight: '10%', borderRadius: '10px' }} label="Packages" ></Tab>
                    <Tab sx={{ backgroundColor: present === 1 ? 'blue' : 'white', color: 'black', border: 'solid blue 1px', marginRight: '10%', borderRadius: '10px' }} label="Add-Ons"></Tab>
                    <Tab sx={{ backgroundColor: present === 2 ? 'blue' : 'white', color: 'black', border: 'solid blue 1px', marginRight: '10%', borderRadius: '10px' }} label="Others"></Tab>
                </Tabs>
            </Box>

            {present === 0 && (
                <div style={{ width: '95%', height: 'auto', backgroundColor: '#f0f0f5', borderRadius: '10px', marginTop: '1%', padding: '1%', marginLeft: '1%' }}>

                    <Stack sx={{padding:'2%'}}>
                        <Typography sx={{ fontWeight: 'bold' }}>Data Packages</Typography>
                        <Stack sx={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                            <img src={Data1} style={{width:'15%', height:"25%"}} />
                            <img src={Data2} style={{width:'15%', height:"25%"}} />
                            <img src={Data3} style={{width:'15%', height:"25%"}} />
                        </Stack>
                    </Stack>

                    <Stack sx={{padding:'2%'}}>
                        <Typography sx={{ fontWeight: 'bold' }}>Voice Packages</Typography>
                        <Stack sx={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                            <img src={Call1} style={{width:'15%', height:"25%"}} />
                            <img src={Call2} style={{width:'15%', height:"25%"}} />
                            <img src={Call3} style={{width:'15%', height:"25%"}} />
                        </Stack>
                    </Stack>

                    <Stack sx={{padding:'2%'}}>
                        <Typography sx={{ fontWeight: 'bold' }}>Learning Packages</Typography>
                        <Stack sx={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                            <img src={Learning1} style={{width:'15%', height:"25%"}} />
                            <img src={Learning2} style={{width:'15%', height:"25%"}} />
                            <img src={Learning3} style={{width:'15%', height:"25%"}} />
                        </Stack>
                    </Stack>
                </div>
            )}

            {present === 1 && (
                <div style={{ width: '95%', height: 'auto', backgroundColor: '#f0f0f5', borderRadius: '10px', marginTop: '1%', padding: '1%', marginLeft: '1%' }}>
                    <Stack sx={{ marginTop: '2%', marginBottom: '2%', marginLeft: '3%', marginRight: '3%' }}>
                        <Typography sx={{ fontWeight: 'bold' }}>Data Add-Ons</Typography>
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                        <img src={Image1} />
                        <img src={Image2} />
                        </div>
                    </Stack>

                    <Stack sx={{ marginTop: '2%', marginBottom: '2%', marginLeft: '3%', marginRight: '3%' }}>
                        <Typography sx={{ fontWeight: 'bold' }}> Extra GB</Typography>
                        <div style={{ marginTop: '1%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Box sx={{ backgroundColor: 'white', height: '10%', width: '10%', borderRadius: '10px', paddingLeft: '2%', paddingRight: '2%', paddingTop: '1%', paddingBottom: '1%', textAlign: 'center' }}>
                                <Typography sx={{ fontSize: '40px', color: 'blue' }}>1 GB</Typography>
                                <Typography sx={{ fontWeight: 'bold', color: 'gray' }}>Rs. 100</Typography>
                            </Box>

                            <Box sx={{ backgroundColor: 'white', height: '10%', width: '10%', borderRadius: '10px', paddingLeft: '2%', paddingRight: '2%', paddingTop: '1%', paddingBottom: '1%', textAlign: 'center' }}>
                                <Typography sx={{ fontSize: '40px', color: 'blue' }}>2 GB</Typography>
                                <Typography sx={{ fontWeight: 'bold', color: 'gray' }}>Rs. 190</Typography>
                            </Box>

                            <Box sx={{ backgroundColor: 'white', height: '10%', width: '10%', borderRadius: '10px', paddingLeft: '2%', paddingRight: '2%', paddingTop: '1%', paddingBottom: '1%', textAlign: 'center' }}>
                                <Typography sx={{ fontSize: '40px', color: 'blue' }}>3 GB</Typography>
                                <Typography sx={{ fontWeight: 'bold', color: 'gray' }}>Rs. 280</Typography>
                            </Box>

                            <Box sx={{ backgroundColor: 'white', height: '10%', width: '10%', borderRadius: '10px', paddingLeft: '2%', paddingRight: '2%', paddingTop: '1%', paddingBottom: '1%', textAlign: 'center' }}>
                                <Typography sx={{ fontSize: '40px', color: 'blue' }}>4 GB</Typography>
                                <Typography sx={{ fontWeight: 'bold', color: 'gray' }}>Rs. 350</Typography>
                            </Box>
                        </div>
                    </Stack>

                    <Stack sx={{ marginTop: '2%', marginBottom: '2%', marginLeft: '3%', marginRight: '3%' }}>
                        <Typography sx={{ fontWeight: 'bold' }}> Rs.85 per GB</Typography>
                        <div style={{ marginTop: '1%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Box sx={{ backgroundColor: '#AEC7FF', height: '10%', width: '10%', borderRadius: '10px', paddingLeft: '2%', paddingRight: '2%', paddingTop: '1%', paddingBottom: '1%', textAlign: 'center' }}>
                                <Typography sx={{ fontSize: '40px', color: 'blue' }}>6 GB</Typography>
                                <Typography sx={{ fontWeight: 'bold', color: 'gray' }}>Rs. 425</Typography>
                            </Box>
                            
                            <Box sx={{ backgroundColor: '#AEC7FF', height: '10%', width: '10%', borderRadius: '10px', paddingLeft: '2%', paddingRight: '2%', paddingTop: '1%', paddingBottom: '1%', textAlign: 'center' }}>
                                <Typography sx={{ fontSize: '40px', color: 'blue' }}>7 GB</Typography>
                                <Typography sx={{ fontWeight: 'bold', color: 'gray' }}>Rs. 510</Typography>
                            </Box>

                            <Box sx={{ backgroundColor: '#AEC7FF', height: '10%', width: '10%', borderRadius: '10px', paddingLeft: '2%', paddingRight: '2%', paddingTop: '1%', paddingBottom: '1%', textAlign: 'center' }}>
                                <Typography sx={{ fontSize: '40px', color: 'blue' }}>8 GB</Typography>
                                <Typography sx={{ fontWeight: 'bold', color: 'gray' }}>Rs. 575</Typography>
                            </Box>

                            <Box sx={{ backgroundColor: '#AEC7FF', height: '10%', width: '10%', borderRadius: '10px', paddingLeft: '2%', paddingRight: '2%', paddingTop: '1%', paddingBottom: '1%', textAlign: 'center' }}>
                                <Typography sx={{ fontSize: '40px', color: 'blue' }}>9 GB</Typography>
                                <Typography sx={{ fontWeight: 'bold', color: 'gray' }}>Rs. 610</Typography>
                            </Box>
                        </div>
                    </Stack>

                    <Stack sx={{ marginTop: '2%', marginBottom: '2%', marginLeft: '3%', marginRight: '3%' }}>
                        <Typography sx={{ fontWeight: 'bold' }}> Rs.75 per GB</Typography>
                        <div style={{ marginTop: '1%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Box sx={{ backgroundColor: '#F9B290', height: '10%', width: '10%', borderRadius: '10px', paddingLeft: '2%', paddingRight: '2%', paddingTop: '1%', paddingBottom: '1%', textAlign: 'center' }}>
                                <Typography sx={{ fontSize: '40px', color: 'blue' }}>10 GB</Typography>
                                <Typography sx={{ fontWeight: 'bold', color: 'gray' }}>Rs. 750</Typography>
                            </Box>

                            <Box sx={{ backgroundColor: '#F9B290', height: '10%', width: '10%', borderRadius: '10px', paddingLeft: '2%', paddingRight: '2%', paddingTop: '1%', paddingBottom: '1%', textAlign: 'center' }}>
                                <Typography sx={{ fontSize: '40px', color: 'blue' }}>15 GB</Typography>
                                <Typography sx={{ fontWeight: 'bold', color: 'gray' }}>Rs. 1125</Typography>
                            </Box>

                            <Box sx={{ backgroundColor: '#F9B290', height: '10%', width: '10%', borderRadius: '10px', paddingLeft: '2%', paddingRight: '2%', paddingTop: '1%', paddingBottom: '1%', textAlign: 'center' }}>
                                <Typography sx={{ fontSize: '40px', color: 'blue' }}>20 GB</Typography>
                                <Typography sx={{ fontWeight: 'bold', color: 'gray' }}>Rs. 1500</Typography>
                            </Box>

                            <Box sx={{ backgroundColor: '#F9B290', height: '10%', width: '10%', borderRadius: '10px', paddingLeft: '2%', paddingRight: '2%', paddingTop: '1%', paddingBottom: '1%', textAlign: 'center' }}>
                                <Typography sx={{ fontSize: '40px', color: 'blue' }}>25 GB</Typography>
                                <Typography sx={{ fontWeight: 'bold', color: 'gray' }}>Rs. 1875</Typography>
                            </Box>
                        </div>
                    </Stack>
                </div>
            )}

            {present === 2 && (
                <div style={{ width: '95%', height: '100vh', backgroundColor: '#f0f0f5', borderRadius: '10px', marginTop: '1%', padding: '3%', marginLeft: '1%' }}>
                    <Stack sx={{ backgroundColor: 'white', borderRadius: '15px', paddingLeft: '10%', paddingRight: '10%', paddingTop: '5%', paddingBottom: '5%', width: '50%', marginLeft: '15%', marginTop: '5%' }}>
                        <div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>Roaming (Voice/Data)</Typography>
                                <Switch {...label} />
                            </div>
                            <hr style={{ width: '100%', borderTop: '2px solid black', margin: '5px 0' }} />
                        </div>

                        <div style={{ marginTop: '3%' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '16px' }}>Tel-Tunes</Typography>
                                <Switch {...label} defaultChecked />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <MusicNoteIcon sx={{ color: 'blue' }} />
                                <Typography>Alone - Alan Waler</Typography>
                            </div>
                        </div>

                        <div style={{ marginTop: '3%' }}>
                            <Button onClick={changeButton} sx={{ backgroundColor: 'blue', ':hover': { backgroundColor: 'blue' }, color: 'white', borderRadius: '10px', padding: '1%', width: '100%' }} >Change</Button>
                        </div>
                    </Stack>
                </div>
            )}

            {select && (
                <div style={{
                    backdropFilter: 'blur(4px)',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    padding: '1%',
                    width: '100%',
                    height: '100vh',
                    borderRadius: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '20%',
                    zIndex: 1001,

                }}>

                    <div style={{
                        padding: '4%',
                        borderRadius: '10px',
                        backgroundColor: '#f0f0f5',
                        width: '500px',
                        position: 'relative',
                        zIndex: 1001
                    }}>
                        <Stack sx={{ marginLeft: '97%', marginBottom:'5%' }}>
                            <IconButton onClick={selectTune}><CloseIcon sx={{ color: 'white', backgroundColor: 'red' }} /></IconButton>
                        </Stack>
                        <hr style={{ width: '100%', borderTop: '2px solid blue', margin: '5px 0' }} />

                        <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '2%', marginTop:'3%' }}>
                            <LibraryMusicIcon sx={{ color: 'blue' }} /><MenuItem >Alone - Alan Waker</MenuItem>
                            <Button onClick={selectTune} sx={{ backgroundColor: 'blue', ':hover': { backgroundColor: 'blue' }, color: 'white', width: '30%' }}>Select</Button>
                        </Stack>
                        <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '2%' }}>
                            <LibraryMusicIcon sx={{ color: 'blue' }} /><MenuItem >DarkSide - Alan Waker</MenuItem>
                            <Button onClick={selectTune} sx={{ backgroundColor: 'blue', ':hover': { backgroundColor: 'blue' }, color: 'white', width: '30%' }}>Select</Button>
                        </Stack>
                        <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '2%' }}>
                            <LibraryMusicIcon sx={{ color: 'blue' }} /><MenuItem >Faded - Alan Waker</MenuItem>
                            <Button onClick={selectTune} sx={{ backgroundColor: 'blue', ':hover': { backgroundColor: 'blue' }, color: 'white', width: '30%' }}>Select</Button>
                        </Stack>
                        <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '2%' }}>
                            <LibraryMusicIcon sx={{ color: 'blue' }} /><MenuItem >The Specture - Alan Waker</MenuItem>
                            <Button onClick={selectTune} sx={{ backgroundColor: 'blue', ':hover': { backgroundColor: 'blue' }, color: 'white', width: '30%' }}>Select</Button>
                        </Stack>
                        <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '2%' }}>
                            <LibraryMusicIcon sx={{ color: 'blue' }} /><MenuItem >Sing me to sleep - Alan Waker</MenuItem>
                            <Button onClick={selectTune} sx={{ backgroundColor: 'blue', ':hover': { backgroundColor: 'blue' }, color: 'white', width: '30%' }}>Select</Button>
                        </Stack>
                        <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '2%' }}>
                            <LibraryMusicIcon sx={{ color: 'blue' }} /><MenuItem >Night - Alan Waker</MenuItem>
                            <Button onClick={selectTune} sx={{ backgroundColor: 'blue', ':hover': { backgroundColor: 'blue' }, color: 'white', width: '30%' }}>Select</Button>
                        </Stack>
                    </div>

                </div>
            )}


        </div>
    )
}
export default Services;