'use client'
import { Box, AppBar, Avatar, Button, Grid, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import RegisterModal from './RegisterModal';
import Image from "next/image";
import logo from '../assets/logo.svg'


const Header = () => {
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [userdata,setUserdata] = useState('');
    const [emailOnHover,setEmailOnHover] = useState('')
    const [isHover,setIsHover] = useState(false)
    const [open, setOpen] = useState(false);

    const loginRegisterHandler = () => {
        setOpen(true)
    }
    useEffect(()=>{
        const storage_token = localStorage.getItem('user_token');
        const storage_user = localStorage.getItem('user_data');
        if(storage_token && storage_user){
            setIsLoggedIn(true);
            setUserdata(()=>{return JSON.parse(storage_user)?.user})
            setEmailOnHover(()=>{return JSON.parse(storage_user)?.email})
        }
    },[])
    const logoutHandler = ()=>{
        setIsLoggedIn(false)
        localStorage.removeItem('user_token');
        localStorage.removeItem('user_data');
        setUserdata('')
    }
    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <AppBar sx={{ bgcolor: '#fff', p: '0px', m: '0px' }} elevation={0}>
                        <Toolbar >
                            <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                <Grid item lg={7} md={8} sm={5} xs={5} >
                                    <Grid container sx={{ justifyContent: {lg:'space-evenly', md:'space-between', sm:'space-between',xs:'space-between'}, alignItems: 'center' }}>
                                        <Grid item xs={3} sx={{ display: { lg: 'block', md: 'none', sm: 'none', xs: 'none' } }}>
                                            <Typography sx={{ fontSize: '32px', fontWeight: 'bold', color: '#1967d2', fontFamily: 'sans-serif', cursor: 'pointer', textAlign: 'center' }}>LearnKoods</Typography>
                                        </Grid>
                                        <Grid item xs={3} sx={{ display: { lg: 'none', md: 'block', sm: 'block', xs: 'block' } }}>
                                            <Box sx={{width: '170px', height: '50px' }}>
                                                <Image src={logo} style={{ width: '100%', height: '1005' }} />

                                            </Box>
                                        </Grid>
                                        <Grid item xs={8} sx={{ display: { lg: 'flex', md: 'none', sm: 'none', xs: 'none' }, justifyContent: 'space-evenly', alignItems: 'center' }}>
                                            <Typography sx={{ fontSize: '15px', color: '#202124', cursor: 'pointer' }}>Home</Typography>
                                            <Typography sx={{ fontSize: '15px', color: '#202124', cursor: 'pointer' }}>Find Jobs</Typography>
                                            <Typography sx={{ fontSize: '15px', color: '#202124', cursor: 'pointer' }}>Employers</Typography>
                                            <Typography sx={{ fontSize: '15px', color: '#202124', cursor: 'pointer' }}>Candidates</Typography>
                                            <Typography sx={{ fontSize: '15px', color: '#202124', cursor: 'pointer' }}>Blog</Typography>
                                            <Typography sx={{ fontSize: '15px', color: '#202124', cursor: 'pointer' }}>About Us</Typography>
                                        </Grid>
                                    </Grid>

                                </Grid>
                                <Grid item lg={5} md={4} sm={6} xs={4} sx={{ position:'relative',display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                                  {isLoggedIn?  <Button variant='contained' sx={{ textTransform: 'capitalize', bgcolor: '#E2EAF8', mr: '20px', color: '#1967D2', '&:hover': { bgcolor: '#1967d2', color: 'white' } }} onClick={logoutHandler}>Logout</Button> :
                                    <Button variant='contained' sx={{ textTransform: 'capitalize', bgcolor: '#E2EAF8', mr: '20px', color: '#1967D2', '&:hover': { bgcolor: '#1967d2', color: 'white' } }} onClick={loginRegisterHandler}>Login / Register</Button>}
                                    <Typography sx={{ fontSize: '17px', color: 'dimgray', mr: '10px' }}>{userdata}</Typography>
                                    <Avatar onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} sx={{ bgcolor: 'crimson',cursor:'pointer' }}>{userdata[0] || 'R'}</Avatar>
                                    <Box sx={{display:isHover?'flex':'none',position:'absolute',top:40,p:'2px 3px',bgcolor:'lightblue',borderRadius:'2px'}}>
                                        <Typography  color={'green'} sx={{fontSize:'13px', m:'2px'}}>{emailOnHover}</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </Grid>
            </Grid>
            <RegisterModal open={open} setOpen={setOpen} />
        </>
    )
}

export default Header