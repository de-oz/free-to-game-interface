import { createSlice } from '@reduxjs/toolkit';

const listSlice = createSlice({
  name: 'listOptions',
  initialState: {
    platform: 'all',
    tag: 'all',
    sortBy: 'relevance',
  },
  reducers: {
    updatePlatform: (state, action) => {
        state.platform = action.payload;
    },
    updateTag: (state, action) => {
        state.tag = action.payload;
    },
    updateSortBy: (state, action) => {
        state.sortBy = action.payload;
    }
  },
});

export const { updatePlatform, updateTag, updateSortBy } = listSlice.actions;

export default listSlice.reducer;
