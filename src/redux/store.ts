import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './reducer/searchSlice';

export const store = configureStore({
  reducer: {
    search: searchSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
