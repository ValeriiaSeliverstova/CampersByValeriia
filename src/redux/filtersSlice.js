import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    tags: [],
    vehicleType: "",
  },
  reducers: {
    setLocationFilter(state, action) {
      state.location = action.payload;
    },
    setTagsFilter(state, action) {
      state.tags = action.payload;
    },
    setVehicleTypeFilter(state, action) {
      state.vehicleType = action.payload;
    },
  },
});

export const filtersSliceReducer = filtersSlice.reducer;
export const { setLocationFilter, setTagsFilter, setVehicleTypeFilter } =
  filtersSlice.actions;

export const selectLocationFilter = (state) => state.filters.location;
export const selectTagsFilter = (state) => state.filters.tags;
export const selectVehicleTypeFilter = (state) => state.filters.vehicleType;
