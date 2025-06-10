import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperDetails } from "./campersOps";
import {
  selectLocationFilter,
  selectTagsFilter,
  selectVehicleTypeFilter,
} from "./filtersSlice";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    loading: false,
    error: null,
    selectedCamper: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(fetchCamperDetails.fulfilled, (state, action) => {
        state.selectedCamper = action.payload;
      })
      .addMatcher(
        isAnyOf(fetchCampers.pending, fetchCamperDetails.pending),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(fetchCampers.rejected, fetchCamperDetails.rejected),
        (state, action) => {
          state.loading = false;
          state.error = action.error.message || "Something went wrong";
        }
      )
      .addMatcher(
        isAnyOf(fetchCampers.fulfilled, fetchCamperDetails.fulfilled),
        (state) => {
          state.loading = false;
        }
      );
  },
});

export const campersSliceReducer = campersSlice.reducer;

export const selectCampers = (state) => state.campers.items;
export const selectIsLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.error;
export const selectCamperDetails = (state) => state.campers.selectedCamper;

export const selectFilteredCampers = createSelector(
  [
    selectCampers,
    selectLocationFilter,
    selectTagsFilter,
    selectVehicleTypeFilter,
  ],
  (campers, location, tags, vehicleType) => {
    return campers.filter((camper) => {
      const locationMatch = location
        ? camper.location.toLowerCase().includes(location.toLowerCase())
        : true;

      const tagMatch =
        tags.length > 0 ? tags.every((tag) => camper[tag]) : true;

      const vehicleTypeMatch = vehicleType ? camper.form === vehicleType : true;

      return locationMatch && tagMatch && vehicleTypeMatch;
    });
  }
);
