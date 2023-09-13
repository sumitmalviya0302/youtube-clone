import VideoCard from "./VideoCard";

import { useEffect, useState } from "react";
import { YOUTUBE_POPULAR_VIDEOS } from "../utils/constants";
import { Link } from "react-router-dom";

const VideoListContainer = () => {
  const [videosList, setVideosList] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const getData = await fetch(YOUTUBE_POPULAR_VIDEOS);

      if (!getData.ok) {
        throw new Error(getData.statusText);
      }

      const json = await getData.json();
      setVideosList(json?.items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-evenly flex-wrap ">
      {videosList.map((video) => (
        <Link to={"/watch/:"+video.id} key={video.id}><VideoCard key={video.id} videoInfo={video} /></Link>
        
      ))}
    </div>
  );
};

export default VideoListContainer;
