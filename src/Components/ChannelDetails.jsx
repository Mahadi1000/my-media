import { useEffect, useState } from "react";
import { fetchAPI } from "../Utils/fetchAPI"
import { useParams } from "react-router-dom";
import ChannelCard from "./ChannelCard";
import { Box } from "@mui/material";
import Videos from "./Videos";
const ChannelDetails = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

    useEffect(() => {
      const fetchResults = async () => {
        const data = await fetchAPI(`channels?part=snippet&id=${id}`);

        setChannelDetail(data?.items[0]);

        const videosData = await fetchAPI(
          `search?channelId=${id}&part=snippet%2Cid&order=date`
        );

        setVideos(videosData?.items);
      };

      fetchResults();
    }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: "300px",
            background:
              "linear-gradient(90deg, rgba(0,15,36,1) 24%, rgba(4,72,20,1) 52%, rgba(0,255,244,1) 100%)",
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}

export default ChannelDetails
