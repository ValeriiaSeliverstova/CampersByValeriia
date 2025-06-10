import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: [],
  },
  reducers: {
    setFavorite(state, action) {
      const camper = action.payload;
      const camperExists = state.items.find((item) => item.id === camper.id);
      if (camperExists) {
        state.items = state.items.filter((item) => item.id !== camper.id);
      } else {
        state.items.push(camper);
      }
    },
  },
});

export const favoritesSliceReducer = favoritesSlice.reducer;
export const { setFavorite } = favoritesSlice.actions;

export const selectFavorites = (state) => state.favorites.items;
