import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { getRandomNumber } from "../utils/randomNumberGenerator";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {

    const [channelDetail, setChannelDetail] = useState();
    const [videos, setVideos] = useState(null);

    const gradientSettingsObj = {
        gradientDegree: getRandomNumber(0, 360),
        percentageColor1: getRandomNumber(0, 10),
        percentageColor2: getRandomNumber(30, 60),
        percentageColor3: getRandomNumber(90, 100),
        rbg1: {
            r: getRandomNumber(0, 255),
            b: getRandomNumber(0, 255),
            g: getRandomNumber(0, 255),
        },
        rbg2: {
            r: getRandomNumber(0, 255),
            b: getRandomNumber(0, 255),
            g: getRandomNumber(0, 255),
        },
        rbg3: {
            r: getRandomNumber(0, 255),
            b: getRandomNumber(0, 255),
            g: getRandomNumber(0, 255),
        }
    }

    const [gradientSettings, setGradientSettings] = useState(gradientSettingsObj);

    // const [gradientDegree, setGradientDegree] = useState(getRandomNumber(0, 360));
    // const [percentageColor1, setPercentageColor1] = useState(getRandomNumber(0, 10));
    // const [percentageColor2, setPercentageColor2] = useState(getRandomNumber(30, 70));
    // const [percentageColor3, setPercentageColor3] = useState(getRandomNumber(90, 100));

    const { id } = useParams();

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const data = await fetchFromAPI(`channels?part=snippet,statistics&id=${id}`);
                // console.log(data?.item[0]);
                setChannelDetail(data.items[0]);
            }
            catch (err) { console.log(err) }

            try {
                const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);
                // console.log(videosData.items);
                setVideos(videosData?.items);
            }
            catch (err) { console.log(err) }
        };

        fetchResults();
    }, [id]);

    return (
        <Box minHeight="95vh">
            <Box>
                <div style={{
                    height: '300px',
                    background: `linear-gradient(${gradientSettings.gradientDegree}deg, rgba(${gradientSettings.rbg1.r},${gradientSettings.rbg1.b},${gradientSettings.rbg1.g},1) ${gradientSettings.percentageColor1}%, rgba(${gradientSettings.rbg2.r},${gradientSettings.rbg2.b},${gradientSettings.rbg2.g},1) ${gradientSettings.percentageColor2}%, rgba(${gradientSettings.rbg3.r},${gradientSettings.rbg3.b},${gradientSettings.rbg3.g},1) ${gradientSettings.percentageColor3}%)`,
                    zIndex: 10,
                }} />
                <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
            </Box>
            <Box p={2} display="flex">
                <Box sx={{ mr: { sm: '100px' } }} />
                <Videos videos={videos} />
            </Box>
        </Box>
    );
};

export default ChannelDetail;