import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchForSearch } from "../api/endpoint";

export const fetchSearch = createAsyncThunk("fetchsearch", async (search) => {
  try {
    const res = await axios.get(`${fetchForSearch}${search}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
const initialState = {
  search_status: "idel",
  search_data: null,
};
export const searchSlice = createSlice({
  name: "search",
  initialState,
  extraReducers: {
    [fetchSearch.pending]: (state) => {
      state.search_status = "loading";
      state.search_data = null;
    },
    [fetchSearch.fulfilled]: (state, { payload }) => {
      state.search_status = "idel";
      state.search_data = payload?.results;
    },
    [fetchSearch.rejected]: (state) => {
      state.search_status = "failed";
    },
  },
});
