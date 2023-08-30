import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
  name: 'game',
  initialState: [],
  reducers: {
    saveGame: (state, action) => {
      state.push(action.payload);
    },
    clearGame: (state, action) => {
      return state.filter((game) => game.id != action.payload);
    },
  },
});

export const { saveGame, clearGame } = gameSlice.actions;

export default gameSlice.reducer;
