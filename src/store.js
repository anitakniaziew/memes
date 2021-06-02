import { configureStore, createSlice } from '@reduxjs/toolkit';

import memes from './memes'

const initialState =  memes;

const slice = createSlice({
  name: 'memes',
  initialState,
  reducers: {
    upvote(state, action) {
      state[action.payload].upvotes++
    },
    downvote(state, action) {
      state[action.payload].downvotes++
    }
  }
});

const store = configureStore({reducer: { memes: slice.reducer}});

export const { upvote, downvote } = slice.actions;
export default store;
