import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../redux/category-Slice";
import "./nav.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { fetchMovies } from "../../redux/movie-slice";

export default function Nav() {
  const [id, setId] = useState("28");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchMovies(id));
  }, [id, dispatch]);
  const cat = useSelector((state) => state.nav);

  const handleMovies = (x) => {
    setId(x.id);
  };

  return (
    <div className="nav">
      {(cat.category_status === "loading") & (cat.category_data === null) ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        cat.category_data?.map((x, i) => (
          <h2 onClick={() => handleMovies(x)} key={i}>
            {x.name}
          </h2>
        ))
      )}
    </div>
  );
}
