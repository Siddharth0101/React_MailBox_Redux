import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
  name: "data",
  initialState: {
    forDraft: false,
    userEmail: localStorage.getItem("userEmail") || "",
    sendEmailFrom: localStorage.getItem("sendEmailFrom") || "",
    sendEmailTo: localStorage.getItem("sendEmailTo") || "",
    items: [],
  },
  reducers: {
    addItems(state, action) {
      state.items.push(action.payload);
    },
    userEmailUpdate(state, action) {
      state.userEmail = action.payload;
    },
    sendEmailFromUpdate(state, action) {
      state.sendEmailFrom = action.payload;
    },
    sendEmailToUpdate(state, action) {
      state.sendEmailTo = action.payload;
    },
    forDraftUpdate(state, action) {
      state.forDraft = true;
    },
  },
});
export const DataSliceActions = DataSlice.actions;
export default DataSlice;
