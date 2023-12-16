import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserAPI } from '../../API/UserAPI';

export type CurrentUserInfo = {
  email: string | null;
  name: string | null;
  token: string | null;
}

const initialState: CurrentUserInfo = {
  email: null,
  token: null,
  name: null
};

export const currentUserSlice = createSlice({
  name: 'manuallyFormData',
  initialState,
  reducers: {
    setCurentUser(state, action: PayloadAction<CurrentUserInfo>) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.name = action.payload.name;
    },
    removeCurentUser(state) {
      state.email = null;
      state.token = null;
      state.name = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      UserAPI.endpoints.setUsersStatus.matchRejected,
      (state) => {
        state.email = null,
        state.token = null,
        state.name = null
      }
    ),
    builder.addMatcher(
      UserAPI.endpoints.deleteUsers.matchRejected,
      (state) => {
        state.email = null,
        state.token = null,
        state.name = null
      }
    )

  }
});

export default currentUserSlice.reducer;
