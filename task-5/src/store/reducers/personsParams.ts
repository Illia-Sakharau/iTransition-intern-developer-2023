import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { QueryParams, Region } from '../../types/persons';
import generateSeed from '../../utils/generateSeed';

const initialState: QueryParams = {
  seed: generateSeed(),
  page: 1,
  size: 20,
  ln: 'en',
  errNum: 0
};

export const personsParams = createSlice({
  name: 'usersList',
  initialState,
  reducers: {
    setSeed(state, action: PayloadAction<number>) {
      state.seed = action.payload
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload
    },
    setSize(state, action: PayloadAction<number>) {
      state.size = action.payload
    },
    setRegion(state, action: PayloadAction<Region>) {
      state.ln = action.payload
    },
    setErrNum(state, action: PayloadAction<number>) {
      state.errNum = action.payload
    },
  },
});

export default personsParams.reducer;
