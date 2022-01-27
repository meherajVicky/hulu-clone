import { configureStore } from "@reduxjs/toolkit";
import { categorySlice } from "./category-Slice";
import { moviesSlice } from "./movie-slice";
import { searchSlice } from "./search-slice";
import { userSlice } from "./user";

export const store = configureStore({
  reducer: {
    nav: categorySlice.reducer,
    mov: moviesSlice.reducer,
    search: searchSlice.reducer,
    user: userSlice.reducer,
  },
});
