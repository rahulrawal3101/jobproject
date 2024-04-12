'use client'
import { Box, Button, Grid, Modal, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react'
import LoginModal from './LoginModal';
import { useRouter } from 'next/navigation';
import axios from 'axios'

const RegisterModal = ({open,setOpen}) => {
  const [data,setData] = useState({username:'',password:'',email:'',first_name:'',last_name:""});
  const router = useRouter();
  const [logOpen,setLogOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
}
const closeHandler=()=>{
  setOpen(false)
}

const goToLoginModal=()=>{
  setLogOpen(true);
  setOpen(false)
}
const handleForm   = async(e)=>{
e.preventDefault();
const res = await axios.post('https://learnkoods-task.onrender.com/user_api/',data)
if(res?.data?.message === 'User Created Succefully'){
  alert(res.data.message)
  setOpen(false);
  setLogOpen(true);
  setData({username:'',password:'',email:'',first_name:'',last_name:""})
}else{
  alert("Not registered!!!")
}

}
  return (
    <>
      <Modal
                open={open}
                onClose={handleClose}
                disableAutoFocus
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,}}
            >
              <Grid container sx={{height:'fit-content',  width: '480px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius:'10px', bgcolor:'#fff' }}>
                <Grid item xs={12} sx={{p:'5px', display:'flex',justifyContent:'right',alignItems:'center'}}>
                 <Box sx={{height:'40px',cursor:'pointer',width:'40px',borderRadius:'4px', display:'flex',justifyContent:'center',alignItems:'center',bgcolor:'#f0f5f7', '&:hover':{bgcolor:'#1967d2',color:'white'}}}>
                  <CloseIcon onClick={closeHandler}/>
                 </Box>
                </Grid>
                <Grid item xs={12} sx={{display:'flex',justifyContent:'center',alignItems:'flex-start'}}>
                  <Typography sx={{ fontSize:'25px',fontFamily:'sans-serif'}}>Create a Free Superio Account</Typography>
                </Grid>
                <Grid item xs={6} sx={{p:'0px 12px', mt:'10px'}}>
                  <Typography sx={{fontSize:'15px',fontWeight:'600'}}>First name</Typography>
                  <TextField value={data.first_name} onChange={(e)=>setData(prev=>{return {...prev,first_name:e.target.value}})} placeholder='Username' sx={{bgcolor:'#f0f5f7',mt:'5px'}} fullWidth/>
                </Grid>
                <Grid item xs={6} sx={{p:'0px 12px', mt:'10px'}}>
                  <Typography sx={{fontSize:'15px',fontWeight:'600'}}>Last name</Typography>
                  <TextField value={data.last_name} onChange={(e)=>setData(prev=>{return {...prev,last_name:e.target.value}})} placeholder='Username' sx={{bgcolor:'#f0f5f7',mt:'5px'}} fullWidth/>
                </Grid>
                <Grid item xs={6} sx={{p:'0px 12px', mt:'10px'}}>
                  <Typography sx={{fontSize:'15px',fontWeight:'600'}}>Email</Typography>
                  <TextField value={data.email} onChange={(e)=>setData(prev=>{return {...prev,email:e.target.value}})} placeholder='Username' sx={{bgcolor:'#f0f5f7',mt:'5px'}} fullWidth/>
                </Grid>
                <Grid item xs={6} sx={{p:'0px 12px', mt:'10px'}}>
                  <Typography sx={{fontSize:'15px',fontWeight:'600'}}>Username</Typography>
                  <TextField value={data.username} onChange={(e)=>setData(prev=>{return {...prev,username:e.target.value}})} placeholder='Username' sx={{bgcolor:'#f0f5f7',mt:'5px'}} fullWidth/>
                </Grid>
                <Grid item xs={12} sx={{p:'0px 12px', mt:'15px'}}>
                  <Typography sx={{fontSize:'15px',fontWeight:'600'}}>Password</Typography>
                  <TextField value={data.password} onChange={(e)=>setData(prev=>{return {...prev,password:e.target.value}})} placeholder='Password' sx={{bgcolor:'#f0f5f7',mt:'5px'}} type='password' fullWidth/>
                </Grid>
                <Grid item xs={12} sx={{p:'15px 12px', mt:'20px'}}>
                  <Button onClick={handleForm} variant='contained' fullWidth sx={{bgcolor:'#1967d2',color:'white',fontSize:'17px',textTransform:'capitalize',p:'10px'}}>Register</Button>
                </Grid>
                <Grid item xs={12} sx={{display:'flex',justifyContent:'center',alignItems:'center', mb:'20px'}}>
                  <Typography sx={{fontSize:'15px',color:'grey'}}>Already have an account? <span style={{color:'grey',fontSize:'15px',fontWeight:'bold',cursor:'pointer'}} onClick={goToLoginModal}>LogIn</span></Typography>
                </Grid>

                <Grid item xs={12} sx={{display:'flex',justifyContent:'space-between',alignItems:'center',p:'15px 12px'}}>
                  <Button sx={{fontSize:'13px',border:'1px solid #3b5998',color:'#3b5998', p:'10px 25px',textTransform:'capitalize',fontWeight:'600','&:hover':{bgcolor:'#3b5998',color:'white'}}}> <span style={{textTransform:'lowercase', marginRight:'20px',fontSize:'16px',fontWeight:'bold'}}>f</span>Log In via Facebook</Button>
                  <Button sx={{fontSize:'13px',border:'1px solid #dc4d28',color:'#dc4d28', p:'10px 25px',textTransform:'capitalize',fontWeight:'600','&:hover':{bgcolor:' #dc4d28',color:'white'} }}><span style={{ marginRight:'20px',fontSize:'16px',fontWeight:'bold'}}>G</span>Log In via Google</Button>
                </Grid>
              </Grid>
            </Modal>

            <LoginModal logOpen={logOpen} setLogOpen={setLogOpen}/>
    </>
  )
}

export default RegisterModal