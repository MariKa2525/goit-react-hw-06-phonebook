import { createSlice } from '@reduxjs/toolkit';
const { initialStateContacts } = require('./initialStateContacts');

const slice = createSlice({
  name: 'contacts',
  initialState: initialStateContacts,
  reducers: {
    addContact(state, action) {
      state.contacts = [action.payload, ...state.contacts];
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    filterContact(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, filterContact } = slice.actions;

export default slice.reducer;
