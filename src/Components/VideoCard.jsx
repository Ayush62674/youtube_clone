import { Link } from "react-router-dom";
import { Typography,Card,CardContent,CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoThumbnailUrl,demoVideoUrl,demoChannelUrl,demoChannelTitle,demoVideoTitle } from "../utils/constants";
const VideoCard = ({video:{id:{videoId},snippet}}) => {
    return (
        <Card sx={{width:{md:'270px',xs:'100%',sm:'358px'},boxShadow:'none',borderRadius:0}}>
            <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
                <CardMedia image={snippet?.thumbnails?.high?.url||demoThumbnailUrl} alt={snippet?.title} sx={{width:{xs:'100%',sm:'358px',md:'320px'},height:180}} />
            </Link>
            <CardContent sx={{backgroundColor:'#1e1e1e',height:'106px'}}>
            <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
                <Typography variant="subtitle1" fontWeight='bold' color='#fff'>
                    {snippet?.title.slice(0,50)||demoVideoTitle.slice(0,50)}
                </Typography>
            </Link>
            <Link to={snippet?.ChannelId?`/channel/${snippet?.ChannelId}`:demoChannelUrl}>
                <Typography variant="subtitle2" fontWeight='bold' color='#fff'>
                    {snippet?.channelTitle||demoChannelTitle}
                    <CheckCircle sx={{fontSize:12,color:'gray',ml:'5px'}}/>
                </Typography>
            </Link>
            </CardContent>
        </Card>
    );
}

export default VideoCard;
