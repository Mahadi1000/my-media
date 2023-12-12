/* eslint-disable react/prop-types */

import { Box, Stack } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import Loader from "./Loader";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;
  console.log(videos);
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos?.map((video, index) => (
        <Box key={index}>
          {video.id.videoId && <VideoCard video={video}></VideoCard>}
          {video.id.channelId && (
            <ChannelCard channelDetail={video}></ChannelCard>
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
