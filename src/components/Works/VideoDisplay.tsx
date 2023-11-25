import React from 'react';
import Project from './Project';

interface VideoDisplayProps {
  selectedProject: Project | null;
  onClose: () => void;
}



const VideoDisplay: React.FC<VideoDisplayProps> = ({ selectedProject, onClose }) => {
  if (!selectedProject) {
    return null; // Don't render anything if there's no selected project
  }

  return (
    <div className="w-3/4" id="video">
      <h2 className="text-2xl font-semibold mb-2">{selectedProject.title}</h2>
      <p className="text-gray-700">{selectedProject.description}</p>
      <button onClick={onClose} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md">Close</button>
    </div>
  );
};

export default VideoDisplay;

