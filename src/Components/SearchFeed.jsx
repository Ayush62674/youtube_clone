import {useState,useEffect} from 'react';
import { Box,Typography } from '@mui/material';
import {Videos} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
    const [videos,setVideos] = useState([]);
    const {searchName} = useParams();
    useEffect(()=>{
        fetchFromAPI(`search?part=snippet&q=${searchName}`)
        .then((data)=>setVideos(data.items))
    },[searchName]);
    return (
        <Box p={2} sx={{overflow:'auto',height:'90vh',flex:2}}>
            <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:'white'}}>
              Search Results for: <span style={{color:'#fc1503'}}>{searchName}</span> videos
            </Typography>
            <Videos videos={videos}/>
        </Box>
    );
}

export default SearchFeed;
