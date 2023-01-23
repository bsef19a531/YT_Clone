import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from "@mui/material";
import SideBar from './SideBar';

const Feed = () => {
    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>

            <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
                <SideBar />

                <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: "#fff" }}>
                    Copyright 2023 @M.Abdullah
                </Typography>
            </Box>

            <Box p={2} sx={{ overflowY: 'auto', heigth: '90vh' }} >
                <Typography variant='h5' fontWeight='bold' mb={2} sx={{ color: 'white', }}>
                    Watch<span style={{ color: '#fc1503' }}>Videos</span>
                </Typography>
            </Box>


        </Stack >
    )
}

export default Feed