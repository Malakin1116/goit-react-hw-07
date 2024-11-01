// import { createSlice } from "@reduxjs/toolkit";

// export const selectFilter = (state) => state.filters.name;

// export const slice = createSlice({
//   name: "filters",
//   initialState: {
//     name: "",
//   },
//   reducers: {
//     changeFilter: (state, action) => {
//       state.name = action.payload;
//     },
//   },
// });

// export const { changeFilter } = slice.actions;

// export default slice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { userData } from "./contactsSlice";

export const selectFilter = (state) => state.filters.name;

export const selectFilteredContacts = (state) => {
  const contacts = userData(state);
  const filterValue = selectFilter(state);

  return contacts.filter((value) =>
    value.name
      ?.toLocaleLowerCase()
      .includes(filterValue.toLocaleLowerCase() || "")
  );
};

export const slice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;

export default slice.reducer;
