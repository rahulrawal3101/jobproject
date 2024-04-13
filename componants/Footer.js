'use client'
import React, { useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
// import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [hoveredIndex1, setHoveredIndex1] = useState(null);
    const [hoveredIndex3, setHoveredIndex3] = useState(null);
    const [hoveredIndex4, setHoveredIndex4] = useState(null);

    const list1 = ['Browse Jobs', 'Browse Categories', 'Candidate Dashboard', 'Job Alerts', 'My Bookmarks'];
    const list2 = ['Browse Candidates', 'Employer Dashboard', 'Add Job', 'Job Packages'];
    const list3 = ['About Us', 'Job Page Invioce', 'Terms Page', 'Blog', 'Contact'];
    const list4 = ['Site Map', 'Terms of Use', 'Privacy Center', 'Security Center', 'Accessibility Center'];

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const handleMouseEnter2 = (index) => {
        setHoveredIndex1(index);
    };
    const handleMouseLeave2 = () => {
        setHoveredIndex1(null);
    };

    const handleMouseEnter3 = (index) => {
        setHoveredIndex3(index);
    };
    const handleMouseLeave3 = () => {
        setHoveredIndex3(null);
    };
    const handleMouseEnter4 = (index) => {
        setHoveredIndex4(index);
    };
    const handleMouseLeave4 = () => {
        setHoveredIndex4(null);
    };

    const date = new Date().getFullYear()

    return (
        <>
            <Grid container
                sx={{
                    mt: '50px',
                    borderTop: '1px solid lightgrey',
                    p: '40px',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'flex-start',
                    pt: '100px',
                    pb: '100px'

                }}
            >
                <Grid item xs={2.8} >
                    <Typography sx={{ fontSize: '30px', fontWeight: 'bold', color: '#1967d2', lineHeight: '1.2rem', fontFamily: 'sans-serif', cursor: 'pointer' }}>LearnKoods</Typography>
                    <Typography sx={{ fontSize: '17px', fontWeight: 'bold', mt: '30px' }}>Call Us</Typography>
                    <Typography sx={{ color: '#1967d2', fontSize: '20px', fontWeight: 'bold', mt: '10px' }}>123 456 7890</Typography>
                    <Typography sx={{ fontSize: '13px', color: 'dimgray', mt: '10px' }}>329 Queensberry Street, North Melbourne VIC 3051, Australia.</Typography>
                    <Typography sx={{ fontSize: '13px', color: 'dimgray', mt: '10px' }}>support@learnkoods.com</Typography>
                </Grid>
                <Grid item xs={1.5} >
                    <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>For Candidates</Typography>
                    <Box sx={{ mt: '30px' }}>
                        {list1.map((ele, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'left',
                                    alignItems: 'center',
                                    position: 'relative',
                                    mb: '10px'
                                }}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Box
                                    sx={{
                                        width: '15px',
                                        height: '2px',
                                        bgcolor: hoveredIndex === index ? '#1967d2' : 'dimgray',
                                        position: 'absolute',
                                        display: hoveredIndex === index ? 'block' : 'none',
                                        opacity: hoveredIndex === index ? 1 : 0,
                                        cursor: 'pointer',
                                        transition: 'width 0.5s ease',
                                        transitionDelay: hoveredIndex === index ? '0s' : '0s',
                                    }}
                                ></Box>
                                <Typography sx={{ fontSize: '13px', color: hoveredIndex === index ? '#1967d2' : 'dimgray', ml: hoveredIndex === index ? '17px' : '2px', cursor: 'pointer' }}>{ele}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Grid>

                <Grid item xs={1.5} >
                    <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>For Employers</Typography>
                    <Box sx={{ mt: '30px' }}>
                        {list2.map((ele, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'left',
                                    alignItems: 'center',
                                    position: 'relative',
                                    mb: '10px'
                                }}
                                onMouseEnter={() => handleMouseEnter2(index)}
                                onMouseLeave={handleMouseLeave2}
                            >
                                <Box
                                    sx={{
                                        width: '15px',
                                        height: '2px',
                                        bgcolor: hoveredIndex1 === index ? '#1967d2' : 'dimgray',
                                        position: 'absolute',
                                        display: hoveredIndex1 === index ? 'block' : 'none',
                                        opacity: hoveredIndex1 === index ? 1 : 0,
                                        cursor: 'pointer',
                                        transition: 'width 0.5s ease',
                                        transitionDelay: hoveredIndex1 === index ? '0s' : '0s',
                                    }}
                                ></Box>
                                <Typography sx={{ fontSize: '13px', color: hoveredIndex1 === index ? '#1967d2' : 'dimgray', ml: hoveredIndex1 === index ? '17px' : '2px' }}>{ele}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Grid>

                <Grid item xs={1.5} >
                    <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>About Us</Typography>
                    <Box sx={{ mt: '30px' }}>
                        {list3.map((ele, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'left',
                                    alignItems: 'center',
                                    position: 'relative',
                                    mb: '10px'
                                }}
                                onMouseEnter={() => handleMouseEnter3(index)}
                                onMouseLeave={handleMouseLeave3}
                            >
                                <Box
                                    sx={{
                                        width: '15px',
                                        height: '2px',
                                        bgcolor: hoveredIndex3 === index ? '#1967d2' : 'dimgray',
                                        position: 'absolute',
                                        display: hoveredIndex3 === index ? 'block' : 'none',
                                        opacity: hoveredIndex3 === index ? 1 : 0,
                                        cursor: 'pointer',
                                        transition: 'width 0.5s ease',
                                        transitionDelay: hoveredIndex3 === index ? '0s' : '0s',
                                    }}
                                ></Box>
                                <Typography sx={{ fontSize: '13px', color: hoveredIndex3 === index ? '#1967d2' : 'dimgray', ml: hoveredIndex3 === index ? '17px' : '2px' }}>{ele}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Grid>

                <Grid item xs={1.5} >
                    <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>Helpful Resources</Typography>
                    <Box sx={{ mt: '30px' }}>
                        {list4.map((ele, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'left',
                                    alignItems: 'center',
                                    position: 'relative',
                                    mb: '10px'
                                }}
                                onMouseEnter={() => handleMouseEnter4(index)}
                                onMouseLeave={handleMouseLeave4}
                            >
                                <Box
                                    sx={{
                                        width: '15px',
                                        height: '2px',
                                        bgcolor: hoveredIndex4 === index ? '#1967d2' : 'dimgray',
                                        position: 'absolute',
                                        display: hoveredIndex4 === index ? 'block' : 'none',
                                        opacity: hoveredIndex4 === index ? 1 : 0,
                                        cursor: 'pointer',
                                        transition: 'width 0.5s ease',
                                        transitionDelay: hoveredIndex4 === index ? '0s' : '0s',
                                    }}
                                ></Box>
                                <Typography sx={{ fontSize: '13px', color: hoveredIndex4 === index ? '#1967d2' : 'dimgray', ml: hoveredIndex4 === index ? '17px' : '2px' }}>{ele}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Grid>

            </Grid>
            <Grid container sx={{ borderTop: '1px solid lightgrey', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={11} >
                    <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                        <Grid item xs={3}>
                            <Typography sx={{ fontSize: '13px', color: 'dimgray' }}>© {date} Learnkoods by Epic . All Right Reserved.</Typography>
                        </Grid>
                        <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <FacebookIcon sx={{ color: 'dimgray', '&:hover': { color: '#bb86fc' } }} fontSize='small' />
                            <TwitterIcon sx={{ color: 'dimgray', '&:hover': { color: '#bb86fc' } }} fontSize='small' />
                            <InstagramIcon sx={{ color: 'dimgray', '&:hover': { color: '#bb86fc' } }} fontSize='small' />
                            <LinkedInIcon sx={{ color: 'dimgray', '&:hover': { color: '#bb86fc' } }} fontSize='small' />

                        </Grid>
                    </Grid>

                </Grid>

            </Grid>
        </>
    )
}

export default Footer