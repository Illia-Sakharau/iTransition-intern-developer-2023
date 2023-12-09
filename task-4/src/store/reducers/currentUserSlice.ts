import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type CurrentUserInfo = {
  email: string | null;
  token: string | null;
}

const initialState: CurrentUserInfo = {
  email: null,
  token: null
};

export const currentUserSlice = createSlice({
  name: 'manuallyFormData',
  initialState,
  reducers: {
    setCurentUser(state, action: PayloadAction<CurrentUserInfo>) {
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    removeCurentUser(state) {
      state.email = null;
      state.token = null;
    },
  },
});

export default currentUserSlice.reducer;
