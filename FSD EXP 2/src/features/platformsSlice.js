import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  platforms: ['React', 'Redux', 'Vite', 'Node.js', 'Express', 'MongoDB'],
};

const platformsSlice = createSlice({
  name: 'platforms',
  initialState,
  reducers: {},
});

export default platformsSlice.reducer;