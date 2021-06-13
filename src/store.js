import { configureStore, createSlice } from '@reduxjs/toolkit';

import memes from './memes';

const initialState = memes;

const slice = createSlice({
  name: 'memes',
  initialState,
  reducers: {
    upvote(state, action) {
      state.find((item) => item.id === action.payload).upvotes++;
    },
    downvote(state, action) {
      state.find((item) => item.id === action.payload).downvotes++;
    },
    toggleFavourite(state, action) {
      const itemToUpdate = state.find((item) => item.id === action.payload);
      itemToUpdate.favourite = !itemToUpdate.favourite;
    }
  },
});

const store = configureStore({ reducer: { memes: slice.reducer } });

export const { upvote, downvote, toggleFavourite } = slice.actions;
export default store;
