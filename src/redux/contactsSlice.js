import { createSlice } from "@reduxjs/toolkit";

export const userData = (state) => state.contacts.items;

export const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase();
  },
});

export const { addContact, deleteContact } = slice.actions;

export default slice.reducer;
