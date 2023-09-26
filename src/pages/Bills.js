import React, { useState } from "react";
import { Typography, Button, Box, Tab, Tabs, List, IconButton, TextField, ListItem, ListItemText } from "@mui/material"
import { Stack } from "@mui/system";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CloseIcon from '@mui/icons-material/Close';


const Bills = () => {
    const [present, setpresent] = useState(0);
    const handleForm = (event, existing_value) => {
        setpresent(existing_value);
    };

    // list
    function createData(name, price) {
        return { name, price };
    }

    const rows = [
        createData('Domestic Calls', 1593.00),
        createData('International Calls', 2375.99),
        createData('Internet Access', 2642.89),
        createData('Television Line', 3053.98),
        createData('Ringing Tone', 3356.55),
        createData('Other', 3563.00),
    ];

    // pay
    const [pay, setpay] = useState(false)
    // open pay form
    const openPay = () => {
        setpay(true)
        setpresent(false)
    }
    // cancel
    const cancel =() => {
        setpay(false)
        setpresent(0)
    }
    // done pay
    const donePay = () => {
        setpay(false)
        setpresent(1)
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
                    <Tab sx={{ backgroundColor: present === 0 ? 'blue' : 'white', color: 'black', border: 'solid blue 1px', marginRight: '10%', borderRadius: '10px' }} label="Bill Summary" ></Tab>
                    <Tab sx={{ backgroundColor: present === 1 ? 'blue' : 'white', color: 'black', border: 'solid blue 1px', marginRight: '10%', borderRadius: '10px' }} label="Bill History"></Tab>
                </Tabs>
            </Box>

            {present === 0 && (
                <Stack sx={{ width: '98%', height: '100vh', backgroundColor: '#F0F0F5', borderRadius: '10px', marginLeft: '2%', marginRight: '5%', marginTop: '1%' }}>
                    <div style={{ width: '50%', backgroundColor: 'white', padding: '1%', borderRadius: '10px', margin: '2%', marginLeft: '22%' }}>
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginLeft: '20%' }}>
                            {rows.map((row) => (
                                <ListItem
                                    secondaryAction={
                                        <ListItemText primary={`${row.price}`} sx={{ textAlign: 'left' }} />
                                    }
                                >
                                    <ListItemText primary={`${row.name}`} />
                                </ListItem>
                            ))}
                            <hr style={{ width: '100%', borderTop: '2px solid black', margin: '5px 0' }} />

                            <ListItem
                                secondaryAction={
                                    <ListItemText sx={{ textAlign: 'left' }}>15930.99</ListItemText>
                                }
                            >
                                <ListItemText>Value Added Tax</ListItemText>
                            </ListItem>
                            <hr style={{ width: '100%', borderTop: '2px solid black', margin: '5px 0' }} />

                            <ListItem
                                secondaryAction={
                                    <ListItemText sx={{ textAlign: 'left' }}>153930.99</ListItemText>
                                }
                            >
                                <ListItemText>Total Payable</ListItemText>
                            </ListItem>
                            <hr style={{ width: '100%', borderTop: '2px solid black', margin: '5px 0' }} />
                            <hr style={{ width: '100%', borderTop: '2px solid black', margin: '5px 0' }} />
                        </List>
                        <div style={{ marginLeft: '30%' }}>
                            <Button onClick={openPay} sx={{ backgroundColor: 'blue', ':hover': { backgroundColor: 'blue' }, color: 'white', width: '50%', }}>Pay</Button>
                        </div>
                    </div>
                </Stack>
            )}


            {present === 1 && (
                <Stack sx={{ width: '99%', height: '100vh', backgroundColor: '#F0F0F5', borderRadius: '10px', marginLeft: '2%', marginRight: '3%', marginTop: '3%', padding: '2%' }}>
                    <div style={{ backgroundColor: 'white', width: '40%', height: 'auto', padding: '2%', marginTop: '1%', marginBottom: '1%', marginRight: '2%', marginLeft: '28%', borderRadius: '10px' }} >
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontSize: '22px' }}><span style={{ fontWeight: 'bold' }}>Pyament :</span> <span style={{ color: 'blue' }}>Rs. 4567.00</span></Typography>
                            <CreditCardIcon sx={{ color: 'blue', fontSize: '30px' }} />
                        </div>
                        <Typography sx={{ color: 'gray', fontWeight: 'bold' }}>Outstanding Rs. 4567.00</Typography>
                        <div style={{ marginTop: '1%', marginLeft: '76%' }}>
                            <Typography sx={{ fontSize: '14px', color: 'gray' }}>01/10/2023  14:06pm</Typography>
                        </div>
                    </div>

                    <div style={{ backgroundColor: 'white', width: '40%', height: 'auto', padding: '2%', marginTop: '1%', marginBottom: '1%', marginRight: '2%', marginLeft: '28%', borderRadius: '10px' }} >
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontSize: '22px' }}><span style={{ fontWeight: 'bold' }}>Pyament :</span> <span style={{ color: 'blue' }}>Rs. 4567.00</span></Typography>
                            <AccountBalanceIcon sx={{ color: 'blue', fontSize: '28x' }} />
                        </div>
                        <Typography sx={{ color: 'gray', fontWeight: 'bold' }}>Outstanding Rs. 4567.00</Typography>
                        <div style={{ marginTop: '1%', marginLeft: '76%' }}>
                            <Typography sx={{ fontSize: '14px', color: 'gray' }}>01/10/2023  14:06pm</Typography>
                        </div>
                    </div>

                    <div style={{ backgroundColor: 'white', width: '40%', height: 'auto', padding: '2%', marginTop: '1%', marginBottom: '1%', marginRight: '2%', marginLeft: '28%', borderRadius: '10px' }} >
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontSize: '22px' }}><span style={{ fontWeight: 'bold' }}>Pyament :</span> <span style={{ color: 'blue' }}>Rs. 4567.00</span></Typography>
                            <CreditCardIcon sx={{ color: 'blue', fontSize: '30px' }} />
                        </div>
                        <Typography sx={{ color: 'gray', fontWeight: 'bold' }}>Outstanding Rs. 4567.00</Typography>
                        <div style={{ marginTop: '1%', marginLeft: '76%' }}>
                            <Typography sx={{ fontSize: '14px', color: 'gray' }}>01/10/2023  14:06pm</Typography>
                        </div>
                    </div>


                </Stack>
            )}

            {pay && (
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

                }}
                >
                    <Stack sx={{
                        width: '98%',
                        height: '100vh',
                        marginLeft: '2%',
                        marginRight: '5%',
                        position: 'relative',
                        zIndex: 1001,
                        marginTop: '15%'
                    }}>
                        <div style={{ width: '50%', backgroundColor: '#F0F0F5', padding: '2%', borderRadius: '10px', margin: '2%', marginLeft: '22%' }}>
                            <Stack sx={{ marginLeft: '97%', marginBottom: '5%' }}>
                                <IconButton onClick={cancel}><CloseIcon sx={{ color: 'white', backgroundColor: 'red' }} /></IconButton>
                            </Stack>
                            <hr style={{ width: '100%', borderTop: '2px solid blue', margin: '5px 0' }} />

                            <div style={{ marginTop: '1%', marginBottom: '1%' }}>
                                <Typography>Pay Amount</Typography>
                                <TextField
                                    sx={{ width: '100%' }}
                                    id="outlined-helperText"
                                    defaultValue="Rs. 1280"
                                    required
                                />
                            </div>
                            <div style={{ marginTop: '1%', marginBottom: '1%' }}>
                                <Typography>Card Number </Typography>
                                <TextField
                                    sx={{ width: '100%' }}
                                    id="outlined-helperText"
                                    defaultValue="455671280"
                                    required
                                />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '3%', marginTop: '1%' }}>
                                <div>
                                    <Typography>Exp month / Year  </Typography>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <TextField type="number" defaultValue="07" sx={{ backgroundColor: 'white', color: 'black', width: '20%', height: '10%', marginRight: '1%' }} />
                                        <TextField type="number" defaultValue="29" sx={{ backgroundColor: 'white', color: 'black', width: '20%', height: '10%' }} />
                                    </div>
                                </div>
                                <div>
                                    <Typography>CVV  </Typography>
                                    <TextField type="number" defaultValue="233" sx={{ backgroundColor: 'white', color: 'black', width: '40%', height: '10%' }} />
                                </div>
                            </div>

                            <div style={{ marginLeft: '30%' }}>
                                <Button onClick={donePay} sx={{ backgroundColor: 'blue', ':hover': { backgroundColor: 'blue' }, color: 'white', width: '50%', }}>Pay Now</Button>
                            </div>
                        </div>
                    </Stack>
                </div>

            )}


        </div>
    )
}
export default Bills;