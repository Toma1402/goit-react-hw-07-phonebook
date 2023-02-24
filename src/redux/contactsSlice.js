import { contactsData } from 'data/contactsData';

const { createSlice } = require('@reduxjs/toolkit');

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsData,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    removeContact(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});
export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer=contactsSlice.reducer
