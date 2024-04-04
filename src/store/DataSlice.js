import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
  name: "data",
  initialState: {
    changed: false,
    userEmail: localStorage.getItem("currentEmail") || "",
    items: [],
  },
  reducers: {
    replaceItems(state, action) {
      state.items = action.payload;
    },
    addItems(state, action) {
      state.items.push(action.payload);
      state.changed = true;
    },
    currentEmailUpdate(state, action) {
      state.userEmail = action.payload;
    },
    deleteItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.changed = true;
    },
  },
});
export const DataSliceActions = DataSlice.actions;
export default DataSlice;
