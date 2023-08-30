import { configureStore } from '@reduxjs/toolkit';
import listReducer from './listSlice';
import gameReducer from './gameSlice';

export const store = configureStore({
  reducer: {
    listOptions: listReducer,
    gameEntries: gameReducer,
  },
});