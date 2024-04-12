'use client'

import FindJobMainCompo from '@/componants/FindJobMainCompo'
import FindjobBanner from '@/componants/FindjobBanner'
import Footer from '@/componants/Footer'
import Header from '@/componants/Header'
import { Grid,Container } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <>
    <Container disableGutters maxWidth='xl'>
    <Grid container>
        <Grid item xs={12}>
        <Header/>
        <FindjobBanner/>
        <FindJobMainCompo/>
        <Footer/>

        </Grid>
      </Grid>

    </Container>
      
    </>
  )
}

export default Home
