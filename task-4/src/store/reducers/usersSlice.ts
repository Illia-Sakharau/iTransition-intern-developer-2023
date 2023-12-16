import { createSlice } from '@reduxjs/toolkit';
import { UserAPI } from '../../API/UserAPI';
import { UserInfo } from '../../types/users';

export type SelectedUsers = {
  isLoading: boolean;
  users: UserInfo[];
}

const initialState: SelectedUsers = {
  isLoading: true,
  users: [],
};

export const usersSlice = createSlice({
  name: 'usersList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      UserAPI.endpoints.getUsers.matchPending,
      (state) => {
        state.isLoading = true;
        state.users = [];
      }
    ),
    builder.addMatcher(
      UserAPI.endpoints.getUsers.matchFulfilled,
      (state, { payload }) => {
        state.isLoading = false;
        state.users = payload;
      }
    ),
    builder.addMatcher(
      UserAPI.endpoints.getUsers.matchRejected,
      (state) => {
        state.isLoading = true;
        state.users = [];
      }
    ),
    builder.addMatcher(
      UserAPI.endpoints.setUsersStatus.matchPending,
      (state) => {
        state.isLoading = true;
        state.users = [];
      }
    ),
    builder.addMatcher(
      UserAPI.endpoints.setUsersStatus.matchFulfilled,
      (state, { payload }) => {
        state.isLoading = false;
        state.users = payload;
      }
    ),
    builder.addMatcher(
      UserAPI.endpoints.setUsersStatus.matchRejected,
      (state) => {
        state.isLoading = true;
        state.users = [];
      }
    )
  }
});

export default usersSlice.reducer;
