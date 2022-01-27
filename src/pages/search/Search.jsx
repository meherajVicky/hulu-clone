import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Results from "../../components/results/Results";

import "./search.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch } from "../../redux/search-slice";
import LoadingLine from "../../ui/LoadingLine";

export default function Search() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const onSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(input));
    setInput("");
  };
  const { search_status, search_data } = useSelector((s) => s.search);
  return (
    <div className={`${search_data === null ? "container" : ""}`}>
      <div className="search">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 500,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="search movies/tv shows"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton sx={{ p: "10px" }} aria-label="search" onClick={onSearch}>
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
      {(search_status === "loading") & (search_data === null) ? (
        <LoadingLine />
      ) : (
        <Results movies={search_data} />
      )}
    </div>
  );
}
