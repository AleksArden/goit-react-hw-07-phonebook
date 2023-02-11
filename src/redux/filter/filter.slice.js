import { createSlice } from "@reduxjs/toolkit";

const filterIninState = {
    filter: "",
}

const filterSlice = createSlice({
    name: "filter",
    initialState: filterIninState,
    reducers: {
        filterAction(state, { payload }) {
            state.filter = payload;
        },
    }
})

export const { filterAction } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;