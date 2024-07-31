import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/v1/contacts?sort=created:desc', {
        headers: {
          Authorization: 'Bearer VlP9cwH6cc7Kg2LsNPXpAvF6QNmgZn',
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createContact = createAsyncThunk(
  'contact/create',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post(
        '/api/v1/contact',
        {
          record_type: 'person',
          privacy: {
            edit: null,
            read: null,
          },
          owner_id: null,
          fields: newContact,
        },
        {
          headers: {
            Authorization: 'Bearer VlP9cwH6cc7Kg2LsNPXpAvF6QNmgZn',
          },
        }
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, thunkAPI) => {
    try {
      const response = axios.delete(`/api/v1/contact/${id}`, {
        headers: {
          Authorization: 'Bearer VlP9cwH6cc7Kg2LsNPXpAvF6QNmgZn',
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
