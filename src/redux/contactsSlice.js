import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  createContact,
  deleteContact,
  currentContact,
} from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactsItem: [],
    currentContact:[],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contactsItem = action.payload;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(createContact.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(createContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contactsItem.resources.push(action.payload);
        state.error = null;
      })
      .addCase(createContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        const idx = state.contactsItem.resources.findIndex(
          (contact) => contact.id === action.payload.data.ids[0]
        );
        state.contactsItem.resources.splice(idx, 1);
        state.error = null;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(currentContact.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(currentContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentContact = action.payload;
        state.error = null;
      })
      .addCase(currentContact.rejected, (state, action) => {
        state.error = null;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
