'use client'

import { Box, Button, Grid, Modal, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react'

import axios from 'axios'

const LoginModal = ({ logOpen, setLogOpen }) => {
  const [data, setData] = useState({ username: '', password: '' });
  const handleClose = () => {
    setLogOpen(false)
  }
  const closeHandler = () => {
    setLogOpen(false)
  }
  const handleForm = async (e) => {
    e.preventDefault();
    const res = await axios.post(' https://learnkoods-task.onrender.com/login_api/', data)
    if (res?.data?.message === 'Login successful.') {
      alert(res.data.message)
      setLogOpen(false);
      localStorage.setItem('user_token', JSON.stringify(res.data.data.access))
      localStorage.setItem('user_data', JSON.stringify({ user: res.data.data.username, email: res.data.data.email }))
      setData({ username: '', password: '' });
      window.location.reload()
    } else {
      alert("Not registered!!!")
    }

  }
  return (
    <Modal
      open={logOpen}
      onClose={handleClose}
      disableAutoFocus
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}
    >
      <Grid container sx={{ height: 'fit-content', width: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', bgcolor: '#fff' }}>
        <Grid item xs={12} sx={{ p: '5px', display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
          <Box sx={{ height: '40px', cursor: 'pointer', width: '40px', borderRadius: '4px', display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: '#f0f5f7', '&:hover': { bgcolor: '#1967d2', color: 'white' } }}>
            <CloseIcon onClick={closeHandler} />
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
          <Typography sx={{ fontSize: '25px', fontFamily: 'sans-serif' }}>Login to Superio</Typography>
        </Grid>

        <Grid item xs={12} sx={{ p: '0px 12px' }}>
          <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>Username</Typography>
          <TextField value={data.username} onChange={(e) => setData(prev => { return { ...prev, username: e.target.value } })} placeholder='Username' sx={{ bgcolor: '#f0f5f7', mt: '5px' }} fullWidth />
        </Grid>
        <Grid item xs={12} sx={{ p: '0px 12px', mt: '15px' }}>
          <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>Password</Typography>
          <TextField type='password' value={data.password} onChange={(e) => setData(prev => { return { ...prev, password: e.target.value } })} placeholder='Password' sx={{ bgcolor: '#f0f5f7', mt: '5px' }} fullWidth />
        </Grid>
        <Grid item xs={12} sx={{ p: '15px 12px', mt: '20px' }}>
          <Button onClick={handleForm} variant='contained' fullWidth sx={{ bgcolor: '#1967d2', color: 'white', fontSize: '17px', textTransform: 'capitalize', p: '10px' }}>Login</Button>
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: '15px 12px' }}>
          <Button sx={{ fontSize: '13px', border: '1px solid #3b5998', color: '#3b5998', p: '10px 25px', textTransform: 'capitalize', fontWeight: '600', '&:hover': { bgcolor: '#3b5998', color: 'white' } }}> <span style={{ textTransform: 'lowercase', marginRight: '20px', fontSize: '16px', fontWeight: 'bold' }}>f</span>Log In via Facebook</Button>
          <Button sx={{ fontSize: '13px', border: '1px solid #dc4d28', color: '#dc4d28', p: '10px 25px', textTransform: 'capitalize', fontWeight: '600', '&:hover': { bgcolor: ' #dc4d28', color: 'white' } }}><span style={{ marginRight: '20px', fontSize: '16px', fontWeight: 'bold' }}>G</span>Log In via Google</Button>
        </Grid>

      </Grid>
    </Modal>
  )
}

export default LoginModal