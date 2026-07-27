import { configureStore } from '@reduxjs/toolkit';
import postReducer from './features/postSlice';
import platformsReducer from './features/platformsSlice';

export const store = configureStore({
  reducer: {
    posts: postReducer,
    platforms: platformsReducer,
  },
});