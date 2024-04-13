'use client'
import { Grid, Typography } from '@mui/material';
import React from 'react';
import bg from '../assets/bg.png'

const FindjobBanner = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sx={{ mt: '65px', p: '52px', background: 'linear-gradient(90deg, rgba(246,246,249,1) 48%, rgba(211,222,250,1) 100%)' }}>
          <Typography sx={{ fontSize: '28px', fontWeight: '600', fontFamily: 'sans-serif', textAlign: 'center' }}>Find Jobs</Typography>
          <Typography sx={{ fontSize: '15px', color: 'dimgray', textAlign: 'center', mt: '10px' }}>Home / Jobs</Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default FindjobBanner