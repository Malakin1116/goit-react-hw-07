import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./contactsOps";

export const userData = (state) => state.contacts.items;

export const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    // addContact: (state, action) => {
    //   state.items.push(action.payload);
    // },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { addContact, deleteContact } = slice.actions;

export default slice.reducer;
