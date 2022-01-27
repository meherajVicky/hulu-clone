import React from "react";
import VideoCard from "../video-card/VideoCard";
import "./results.css";
import FlipMove from "react-flip-move";

export default function Results({ movies }) {
  return (
    <div className="results">
    <FlipMove>
      {movies?.map((item, i) => (
        <VideoCard key={i} movie={item} />
      ))}
      </FlipMove>
    </div>
  );
}
