import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface YouTubeVideoProps {
  videoId: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoId }) => {
  const [videoData, setVideoData] = useState<any>(null);

  useEffect(() => {
    const apiKey = 'AIzaSyCelxEL450EW7fOQXmMdbyZ7NHprhXFhxo'; // Replace with your actual API key
    const videoUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`;

    axios
      .get(videoUrl)
      .then((response) => {
        const video = response.data.items[0];
        setVideoData(video);
      })
      .catch((error) => {
        console.error('Error fetching video data:', error);
      });
  }, [videoId]);

  if (!videoData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{videoData.snippet.title}</h2>
      <p>{videoData.snippet.description}</p>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={videoData.snippet.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubeVideo;
