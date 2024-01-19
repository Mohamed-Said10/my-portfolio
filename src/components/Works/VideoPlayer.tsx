import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {

  const [videoHeight, setVideoHeight] = useState<string>('55vh');

  useEffect(() => {
    const handleResize = () => {
      const newHeight = window.innerWidth < 640 ? '16vh' : '55vh'; // Adjust the heights based on screen size
      setVideoHeight(newHeight);
    };

    handleResize(); // Initial height adjustment

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="video-player mt-24">
      <ReactPlayer url={videoUrl} controls width='100%' height={videoHeight}/>
    </div>
  );
};

export default VideoPlayer;
