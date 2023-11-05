import React from 'react';
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  return (
    <div className="video-player">
        
      <ReactPlayer url={videoUrl} controls width='100%' height='500px'/>
    </div>
  );
};

export default VideoPlayer;
