import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  fetchForHome,
  fetchForTrending,
  fetchForVerified,
  fetchMovieById,
} from "../api/endpoint";
export const fetchMovies = createAsyncThunk("fetchmovies", async (id) => {
  try {
    const res = await axios.get(`${fetchMovieById}${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
export const fetchHome = createAsyncThunk("fetchhome", async () => {
  try {
    const res = await axios.get(fetchForHome);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
export const fetchTrending = createAsyncThunk("fetchtrending", async () => {
  try {
    const res = await axios.get(fetchForTrending);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
export const fetchVerified = createAsyncThunk("fetchverified", async () => {
  try {
    const res = await axios.get(fetchForVerified);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
const initialState = {
  movie_status: "idel",
  movie_data: [],
};
export const moviesSlice = createSlice({
  name: "movie",
  initialState,
  extraReducers: {
    [fetchMovies.pending]: (state) => {
      state.movie_status = "loading";
      state.movie_data = null;
    },
    [fetchMovies.fulfilled]: (state, { payload }) => {
      state.movie_status = "idle";
      state.movie_data = payload?.results;
    },
    [fetchMovies.rejected]: (state) => {
      state.movie_status = "idle";
    },
    [fetchHome.pending]: (state) => {
      state.movie_status = "loading";
      state.movie_data = null;
    },
    [fetchHome.fulfilled]: (state, { payload }) => {
      state.movie_status = "idle";
      state.movie_data = payload?.results;
    },
    [fetchHome.rejected]: (state) => {
      state.movie_status = "idle";
    },
    [fetchTrending.pending]: (state) => {
      state.movie_status = "loading";
    },
    [fetchTrending.fulfilled]: (state, { payload }) => {
      state.movie_status = "idel";
      state.movie_data = payload?.results;
    },
    [fetchTrending.rejected]: (state) => {
      state.movie_status = "idel";
    },
    [fetchVerified.pending]: (state) => {
      state.movie_status = "loading";
    },
    [fetchVerified.fulfilled]: (state, { payload }) => {
      state.movie_status = "idel";
      state.movie_data = payload?.results;
    },
    [fetchVerified.rejected]: (state) => {
      state.movie_status = "idel";
    },
  },
});
