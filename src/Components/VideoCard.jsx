/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import {
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
  demoChannelTitle,
  demoChannelUrl,
} from "../Utils/constants";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const VideoCard = ({ video: { id: { videoId }, snippet, }, }) => {
//   console.log(videoId, snippet);
    return (
      <Card
        sx={{
          width: { xs: "100%", sm: "358px", md: "320px" },
          boxShadow: "none",
          borderRadius: 0,
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <CardMedia
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
          />
        </Link>
        <CardContent sx={{ backgroundColor: "#181818", height: "106px" }}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>
          <Link
            to={
              snippet?.channelId
                ? `/channel/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <Typography variant="subtitle2" color="gray">
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircleIcon
                sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
              />
            </Typography>
          </Link>
        </CardContent>
      </Card>
    );
};

export default VideoCard;
