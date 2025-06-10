import { configureStore } from "@reduxjs/toolkit";
import { campersSliceReducer } from "./campersSlice";
import { filtersSliceReducer } from "./filtersSlice";
import { favoritesSliceReducer } from "./favoritesSlice";

export const store = configureStore({
  reducer: {
    campers: campersSliceReducer,
    filters: filtersSliceReducer,
    favorites: favoritesSliceReducer,
  },
});
