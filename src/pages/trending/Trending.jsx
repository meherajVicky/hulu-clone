import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Results from "../../components/results/Results";
import { fetchTrending } from "../../redux/movie-slice";
import LoadingLine from "../../ui/LoadingLine";

export default function Trending() {
  const dispatch = useDispatch();
  const { movie_status, movie_data } = useSelector((s) => s.mov);
  useEffect(() => {
    dispatch(fetchTrending());
  }, [dispatch]);
  return (
    <div>
      {(movie_status === "loading") & (movie_data === null) ? (
        <LoadingLine />
      ) : (
        <Results movies={movie_data} />
      )}
    </div>
  );
}
