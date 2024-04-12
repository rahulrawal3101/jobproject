'use client'
import { Box, FormControl, Grid, InputBase, InputLabel, MenuItem, Select, Typography, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Image from "next/image";
import bg1 from '../assets/bg1.png';
import img1 from '../assets/img1.png';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
// import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';






const FindJobMainCompo = () => {
    const [search, setSearch] = useState('')
    const [isLocation, setIsLocation] = useState('')
    const [jobsData, setJobsData] = useState([]);
    const [apiData, setApiData] = useState([])
    const [isReverse, setReverse] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const skelArr = new Array(5).fill(1);

    const [catList, setCatList] = useState(
        [
            {
                name: 'Residential'
            },
            {
                name: 'Commercial'
            },
            {
                name: 'Industrial'
            },
            {
                name: 'Apartments'
            }
        ]
    );

    const arrData = ['App', 'Administrative', 'Android', 'Wordpress', 'Design', 'React']
    // console.log(catList)

    // const fetchJobDetails = async () => {
    //     try {
    //         const getJobData = await axios.get('https://learnkoods-task.onrender.com/job_api/');
    //         console.log(getJobData);
    //         setJobsData(getJobData.data.results)
    //         setApiData(getJobData.data.results)

    //     } catch (err) {
    //         console.log(err)
    //     }
    // };

    const fetchJobDetailsPage = async () => {
        setJobsData([]);
        try {
            const getJobData = await axios.get(`https://learnkoods-task.onrender.com/job_api/?page=${currentPage}`);
            setJobsData(getJobData.data.results)
            setApiData(getJobData.data.results)

        } catch (err) {
            console.log(err)
        }
    };
    useEffect(() => {
        if (currentPage > 1) {
            fetchJobDetailsPage()
        }
    }, [currentPage])

    useEffect(() => {     
        fetchJobDetailsPage()
        
    }, [currentPage])

    const fethFilterData = async () => {
        const filterData = jobsData.filter((item) => {
            return item.title.toLowerCase().includes(search.toLowerCase());
        });
        setJobsData(filterData);
        if (search.length < 1) {
            setJobsData(apiData);
        }
    }
    useEffect(() => {
        fethFilterData()
    }, [search]);


    const fetchFilterLocData =async() => {
        const filterLocData = jobsData.filter((item) => {
            return item.location.toLowerCase().includes(isLocation.toLowerCase());
        });
        setJobsData(filterLocData);
        if (isLocation.length < 1) {
            setJobsData(apiData);
            // if (currentPage === 1) { fetchJobDetails(); }
            // if (currentPage !== 1) { fetchJobDetailsPage(); }
        }
    };
    useEffect(() => {
        fetchFilterLocData();
    }, [isLocation])



    const changeTime = (action) => {
        if (action == "defaultData") {
            if (isReverse) {
                setJobsData(prev => { return [...prev].reverse() })
                setReverse(false)
            }

        }
        if (action == 'reverse') {
            setJobsData(prev => { return [...prev].reverse() })
            setReverse(true)
        }
    };


    const handleForwardClick=()=>{
        setCurrentPage(prevPage => prevPage + 1);
    
    }
    return (
        <>
            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', }}>
                <Grid item xs={10.5} sx={{ mt: '40px' }}>
                    <Grid container sx={{ mt: '10px', height: 'auto-height', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Grid item xs={3.7} sx={{ height: '100%', borderRadius: '5px', display: { lg: 'block', md: 'none', sm: 'none', xs: 'none' } }}>
                            <Grid container sx={{ p: '15px', bgcolor: '#f5f7fc', borderRadius: '10px' }}>
                                <Grid item xs={12} sx={{ mt: '15px' }}>
                                    <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>Search by Keywords</Typography>
                                    <Box sx={{ border: '1px solid lightgrey', bgcolor: 'white', p: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '5px', mt: '10px' }}>
                                        <SearchIcon sx={{ fontSize: '22px', color: 'grey', width: '10%' }} />
                                        <InputBase value={search} onChange={(e) => setSearch(e.target.value)} placeholder='job title, keywords, or company' sx={{ width: '90%', color: 'grey' }} />
                                    </Box>

                                </Grid>

                                <Grid item xs={12} sx={{ mt: '20px' }}>
                                    <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>location</Typography>
                                    <Box sx={{ border: '1px solid lightgrey', bgcolor: 'white', p: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '5px', mt: '10px' }}>
                                        <LocationOnOutlinedIcon sx={{ fontSize: '22px', color: 'grey', width: '10%' }} />
                                        <InputBase value={isLocation} onChange={(e) => setIsLocation(e.target.value)} placeholder='City or postcode' sx={{ width: '90%', color: 'grey' }} />

                                    </Box>

                                </Grid>

                                <Grid item xs={12} sx={{ mt: '20px' }}>
                                    <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>Category</Typography>

                                    <FormControl sx={{ bgcolor: 'white', mt: '15px' }} fullWidth>
                                        <InputLabel id="demo-controlled-open-select-label">Choose a category</InputLabel>
                                        <Select
                                            label="Choose a category"
                                        >
                                            <MenuItem value="">
                                                <em>Choose a category</em>
                                            </MenuItem>

                                            {catList.map((category, index) => (
                                                <MenuItem key={index} fullWidth >{category.name}</MenuItem>
                                            ))}
                                            
                                        </Select>
                                    </FormControl>

                                </Grid>
                                <Grid item xs={12} sx={{ mt: '15px' }}>
                                    <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>Job Type</Typography>
                                    <FormGroup sx={{ mt: '10px' }}>
                                        <FormControlLabel control={<Switch size="small" />} label={<Typography sx={{ color: 'grey', fontSize: '14px' }}>Freelancer</Typography>} />
                                        <FormControlLabel control={<Switch size="small" sx={{ mt: '7px', display: 'flex' }} />} label={<Typography sx={{ color: 'grey', fontSize: '14px' }}>Full Time</Typography>} />
                                        <FormControlLabel control={<Switch size="small" sx={{ mt: '7px' }} />} label={<Typography sx={{ color: 'grey', fontSize: '14px' }}>Part Time</Typography>} />
                                        <FormControlLabel control={<Switch size="small" sx={{ mt: '7px' }} />} label={<Typography sx={{ color: 'grey', fontSize: '14px' }}>Temporary</Typography>} />
                                    </FormGroup>

                                </Grid>
                                <Grid item xs={12} sx={{ mt: '20px' }}>
                                    <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>Date Posted</Typography>
                                    <FormGroup sx={{ mt: '10px' }}>
                                        <FormControlLabel control={<Switch size="small" />} label={<Typography sx={{ color: 'grey', fontSize: '14px' }}>All</Typography>} />
                                        <FormControlLabel control={<Switch size="small" sx={{ mt: '7px' }} />} label={<Typography sx={{ color: 'grey', fontSize: '14px' }}>Last Hour</Typography>} />
                                        <FormControlLabel control={<Switch size="small" sx={{ mt: '7px' }} />} label={<Typography sx={{ color: 'grey', fontSize: '14px' }}>Last 24 Hour</Typography>} />
                                        <FormControlLabel control={<Switch size="small" sx={{ mt: '7px' }} />} label={<Typography sx={{ color: 'grey', fontSize: '14px' }}>Last 7 Days</Typography>} />
                                        <FormControlLabel control={<Switch size="small" sx={{ mt: '7px' }} />} label={<Typography sx={{ color: 'grey', fontSize: '14px' }}>Last 30 Days</Typography>} />

                                    </FormGroup>

                                </Grid>

                                <Grid item xs={12} sx={{ mt: '20px' }}>
                                    <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>Experience Level</Typography>
                                    <FormGroup sx={{ mt: '10px' }}>
                                        <FormControlLabel control={<Switch size="small" />} label={<Typography sx={{ color: 'grey', fontSize: '14px' }}>Fresh</Typography>} />
                                        <FormControlLabel control={<Switch size="small" sx={{ mt: '7px' }} />} label={<Typography sx={{ color: 'grey', fontSize: '14px' }}>1 Year</Typography>} />
                                        <FormControlLabel control={<Switch size="small" sx={{ mt: '7px' }} />} label={<Typography sx={{ color: 'grey', fontSize: '14px' }}>2 Year</Typography>} />
                                        <FormControlLabel control={<Switch size="small" sx={{ mt: '7px' }} />} label={<Typography sx={{ color: 'grey', fontSize: '14px' }}>3 Year</Typography>} />
                                        <FormControlLabel control={<Switch size="small" sx={{ mt: '7px' }} />} label={<Typography sx={{ color: 'grey', fontSize: '14px' }}>4 Year</Typography>} />
                                        <FormControlLabel control={<Switch size="small" sx={{ mt: '7px' }} />} label={<Typography sx={{ color: 'grey', fontSize: '14px' }}>5 Year</Typography>} />

                                    </FormGroup>

                                </Grid>

                                <Grid item xs={12} sx={{ mt: '20px' }}>
                                    <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>Tags</Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', ml: '20px' }}>


                                        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap', width: '300px' }}>
                                            {
                                                arrData.map((ele, index) => {
                                                    return (
                                                        <Box key={index} sx={{ bgcolor: 'white', width: 'fit-content', p: '5px 10px', m: '6px', cursor: 'pointer', borderRadius: '7px', '&:hover': { bgcolor: '#e8eaf6' } }}>
                                                            <Typography sx={{ fontSize: '14px', color: 'grey', textAlign: 'center', '&:hover': { color: '#0146a6' } }}>{ele}</Typography>
                                                        </Box>
                                                    )
                                                })
                                            }

                                        </Box>
                                    </Box>


                                </Grid>

                            </Grid>
                            <Grid container sx={{ bgcolor: 'white' }}>
                                <Grid item xs={7.3} sx={{ mt: '25px', bgcolor: '#f5f7fc', p: '15px 20px', borderRadius: '10px 0px 0px 10px' }}>
                                    <Typography sx={{ fontSize: '16px', fontWeight: '600', mt: '15px' }}>Recruiting?</Typography>
                                    <Typography sx={{ fontSize: '13px', color: 'grey', mt: '20px' }}>Advertise your jobs to millions of monthly users and search 15.8 million CVs in our database.</Typography>
                                    <Button variant='contained' sx={{ fontSize: '14px', textTransform: 'capitalize', bgcolor: '#1967D2', p: '13px 30px', mt: '30px' }}>start Recruiting Now</Button>


                                </Grid>
                                <Grid item xs={4.7} sx={{ mt: '25px', bgcolor: '#f5f7fc', overflow: 'hidden', borderRadius: '0px 10px 10px 0px' }}>
                                    <Image src={bg1} objectFit='cover' sx={{ width: '100%', height: '100%' }} />

                                </Grid>

                            </Grid>

                        </Grid>
                        <Grid item lg={8} md={12} sm={12} xs={12} >
                            <Grid container>
                                <Grid item xs={12} sx={{ mt: '25px' }}>

                                    <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center', }}>
                                        <Grid item xs={3}>
                                            {jobsData.length > 0 && <Typography sx={{ fontSize: '14px', color: 'grey' }}>Show  <span style={{ fontSize: '14px', color: 'grey', fontWeight: '700' }}> 5 </span> jobs </Typography>}
                                        </Grid>
                                        <Grid item lg={2.7} md={4} sm={5} xs={7}>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="demo-simple-select-label">sort by (default)</InputLabel>
                                                <Select
                                                    label="sort by (default)"
                                                >
                                                    <MenuItem ><em>sort by (default)</em></MenuItem>
                                                    <MenuItem onClick={() => changeTime('defaultData')} value={'Newest'}>Newest</MenuItem>
                                                    <MenuItem onClick={() => changeTime('reverse')} value={'Oldest'}>Oldest</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    {
                                        jobsData == '' ?
                                            <Grid container>
                                                {
                                                    skelArr.map((ele, index) => {
                                                        return (
                                                            <Grid item xs={12} sx={{ mt: '20px' }}>
                                                                <Skeleton variant="rectangular" width={'100%'} height={'170px'} sx={{ borderRadius: '10px' }} />

                                                            </Grid>
                                                        )
                                                    })
                                                }

                                            </Grid>
                                            :

                                            <Grid container>
                                                {
                                                    jobsData.map((ele, index) => {
                                                        if (index < 6) {
                                                            return (
                                                                <Grid container key={index} sx={{ border: '0.5px solid lightgrey', mt: '20px', p: '15px 17px', borderRadius: '7px', '&:hover': { boxShadow: '1px 1px 10px 0px rgba(230,230,230,1)' } }}>
                                                                    <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                                                                        <Box sx={{ width: '50px', height: '50px', mt: '10px' }}>
                                                                            <Image src={`https://learnkoods-task.onrender.com${ele.image}`} alt='jobs' width={100} height={100} style={{ width: '100%', height: '100%' }} />
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid item xs={11} sx={{ mb: '10px' }}>
                                                                        <Grid container sx={{ mt: '20px' }}>
                                                                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                                                <Typography sx={{ fontSize: '17px', fontWeight: '600' }}>{ele.title}</Typography>
                                                                                <BookmarkBorderOutlinedIcon fontSize='small' sx={{ color: 'dimgray' }} />
                                                                            </Grid>
                                                                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', mt: '8px' }}>
                                                                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                                    <BusinessCenterOutlinedIcon sx={{ color: 'dimgray', mr: '5px', fontSize: '23px' }} />
                                                                                    <Typography sx={{ fontSize: '14px', color: 'dimgray', mr: '10px' }}>Segment</Typography>
                                                                                </Box>

                                                                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                                    <LocationOnOutlinedIcon sx={{ color: 'dimgray', mr: '5px', fontSize: '23px', ml: '3px' }} />
                                                                                    <Typography sx={{ fontSize: '14px', color: 'dimgray', mr: '10px' }}>{ele.location}, UK</Typography>
                                                                                </Box>

                                                                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                                    <AccessTimeOutlinedIcon sx={{ color: 'dimgray', mr: '5px', fontSize: '23px', ml: '3px' }} />
                                                                                    <Typography sx={{ fontSize: '14px', color: 'dimgray', mr: '10px' }}>11 hours ago</Typography>
                                                                                </Box>

                                                                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                                    <LocalAtmOutlinedIcon sx={{ color: 'dimgray', mr: '5px', fontSize: '23px', ml: '3px' }} />
                                                                                    <Typography sx={{ fontSize: '14px', color: 'dimgray', mr: '10px' }}>${ele['min salary']} - ${ele['max salary']}</Typography>
                                                                                </Box>
                                                                            </Grid>
                                                                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', mt: '10px' }}>
                                                                                <Box sx={{ width: 'fit-content', bgcolor: 'rgba(25, 103, 210, .15)', borderRadius: '10px' }}>
                                                                                    <Typography sx={{ color: '#1967d2', fontSize: '13px', p: '2px 22px' }}>{ele.type}</Typography>
                                                                                </Box>
                                                                                <Box sx={{ width: 'fit-content', bgcolor: 'rgba(52, 168, 83, .15)', borderRadius: '10px', ml: '10px' }}>
                                                                                    <Typography sx={{ color: '#34a853', fontSize: '13px', p: '2px 22px' }}>Private</Typography>
                                                                                </Box>
                                                                                <Box sx={{ width: 'fit-content', bgcolor: 'rgba(249, 171, 0, .15)', borderRadius: '10px', ml: '10px' }}>
                                                                                    <Typography sx={{ color: '#f9ab00', fontSize: '13px', p: '2px 22px' }}>Urgent</Typography>
                                                                                </Box>
                                                                            </Grid>
                                                                        </Grid>

                                                                    </Grid>
                                                                </Grid>
                                                            )
                                                        }

                                                    })
                                                }

                                            </Grid>
                                    }
                                    <Grid container>
                                        <Grid item xs={12} sx={{ mt: '10px', display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                                            <Stack spacing={2}>
                                                <Pagination page={currentPage} onNext={handleForwardClick} onChange={(e) => setCurrentPage(() => parseInt(e.target.innerText))} count={5} size="small" />
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>

                    </Grid>

                </Grid>
            </Grid>
        </>
    )
}

export default FindJobMainCompo