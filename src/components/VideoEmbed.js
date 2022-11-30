import * as React from "react";
import { Box } from "@mui/material/";
const VideoEmbed = ({ videoSrcURL, videoTitle, ...props }) => (
  <Box sx={{ aspectRatio: "16 /9" }}>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      width="100%"
      height="100%"
    />
  </Box>
);
export default VideoEmbed;
