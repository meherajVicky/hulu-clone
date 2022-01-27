import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchCategory_end_point } from "../api/endpoint";

export const fetchCategory = createAsyncThunk("fetchcategory", async () => {
  try {
    const res = await axios.get(fetchCategory_end_point);
    return res.data;
  } catch (e) {
    console.log(e);
  }
});

const initialState = {
  category_status: "idel",
  category_data: null,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: {
    [fetchCategory.pending]: (state, action) => {
      state.category_status = "loading";
      state.category_data = null;
    },
    [fetchCategory.fulfilled]: (state, action) => {
      state.category_status = "idle";
      state.category_data = action.payload?.genres;
    },
    [fetchCategory.rejected]: (state, action) => {
      state.category_status = "idle";
    },
  },
});
