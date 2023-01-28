import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import {Videos,ChannelCard} from './';
import { fetchFromAPI } from "../utils/fetchFromAPI";
const ChannelDetail = () => {
    const [channelDetails,setChannelDetails] = useState(null);
    const [videos,setVideos] = useState([])
    const {id} = useParams();
    useEffect(()=>{
        fetchFromAPI(`channels?part=snippet&id=${id}`)
        .then((data)=> setChannelDetails(data?.items[0]));

        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
        .then((data)=> setVideos(data?.items));
    },[id])
    return (
        <Box minHeight='95vh'>
            <Box>
                <div
                style={{background: 'linear-gradient(90deg, rgba(0,42,51,1) 0%, rgba(252,19,2,1) 100%, rgba(232,22,203,0.4318977591036415) 100%)',zIndex:10,height:'300px'}}
                />
                <ChannelCard channelDetail={channelDetails} marginTop='-113px'/>
            </Box>
            <Box display='flex' p='2'>
                <Box sx={{mr:{sm:'50px'}}}/>
                    <Videos videos={videos}/>
            </Box>
        </Box>
    );
}

export default ChannelDetail;
