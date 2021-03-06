import { ThumbUpSharp } from "@mui/icons-material";
import React, { forwardRef } from "react";
import TextTruncate from "react-text-truncate";
import "./video-card.css";

const base_url = "https://image.tmdb.org/t/p/original/";
const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="card">
      <img
        src={`${base_url}${movie?.backdrop_path || movie?.poster_path}`}
        alt="123"
      />
      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        text={movie?.overview}
        // textTruncateChild={<a href="#">Read on</a>}
      />

      <h2>{movie?.original_title || movie?.title}</h2>
      <p className="videoCard_stats">
        {movie?.media_type && `${movie?.media_type}`}
        {movie?.release_date || movie?.first_air_date}
        <span>
          <ThumbUpSharp />
          {/* <hr></hr> */}
          {movie?.vote_count}
        </span>
      </p>
    </div>
  );
});
export default VideoCard;
