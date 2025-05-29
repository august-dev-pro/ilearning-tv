import { Video } from "@/types/Video";
import React from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  video: Video;
  controls?: boolean;
  width?: string | number;
  height?: string | number;
  light?: boolean | string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  video,
  controls = true,
  width = "100%",
  height = "100%",
  light = false,
}) => (
  <ReactPlayer
    url={`/videos/teste.mp4`}
    controls={controls}
    width={width}
    height={height}
    light={light}
    style={{ objectFit: "cover" }}
  />
);

export default VideoPlayer;
