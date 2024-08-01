import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://cors-anywhere.herokuapp.com/https://live.devnimble.com';

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
      const response = await axios.delete(`/api/v1/contact/${id}`, {
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

export const currentContact = createAsyncThunk(
  'contacts/getCurrent',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/api/v1/contact/${id}`, {
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

export const addTags = createAsyncThunk(
  'contacts/addTag',
  async ({ id, newTags }, thunkAPI) => {
    console.log("🚀 ~ newTags:", newTags)
    console.log("🚀 ~ id:", id)
    try {
      const response = await axios.put(
        `/api/v1/contacts/${id}/tags`,
        { tags: newTags },
        // newTags,
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
