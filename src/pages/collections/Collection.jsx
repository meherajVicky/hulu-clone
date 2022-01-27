import React from "react";
import { useSelector } from "react-redux";
import Nav from "../../components/nav/Nav";
import Results from "../../components/results/Results";
import LoadingLine from "../../ui/LoadingLine";

export default function Collection() {
  const { movie_status, movie_data } = useSelector((e) => e.mov);

  return (
    <>
      <Nav />
      {(movie_status === "loading") & (movie_data === null) ? (
        <LoadingLine />
      ) : (
        <Results movies={movie_data} />
      )}
    </>
  );
}
