import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from "@mui/material";
import { SideBar, Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';


const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then()
    }, [selectedCategory])

    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>

            <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
                <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

                <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: "#fff" }}>
                    Copyright 2023 @M.Abdullah
                </Typography>
            </Box>

            <Box p={2} sx={{ overflowY: 'auto', heigth: '90vh' }} >
                <Typography variant='h5' fontWeight='bold' mb={2} sx={{ color: 'white', }}>
                    Watch {selectedCategory + " "}<span style={{ color: '#fc1503' }}> Videos</span>
                </Typography>
            </Box>

            <Videos videos={videos} />
        </Stack >
    )
}

export default Feed