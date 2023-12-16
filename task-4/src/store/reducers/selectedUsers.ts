import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type Email = string;

export type SelectedUsers = {
  selectedUsers: Email[];
}

const initialState: SelectedUsers = {
  selectedUsers: [],
};

export const selectedUsersSlice = createSlice({
  name: 'manuallyFormData',
  initialState,
  reducers: {
    selectUser(state, action: PayloadAction<Email>) {
      state.selectedUsers.push(action.payload)
      state.selectedUsers = [...(new Set(state.selectedUsers))]
    },
    unselectUser(state, action: PayloadAction<Email>) {
      const index = state.selectedUsers.indexOf(action.payload)
      if (index !== -1) {
        state.selectedUsers.splice(index, 1);
      }
    },
    clearSelectedList(state) {
      state.selectedUsers = [];
    },
  },
});

export default selectedUsersSlice.reducer;
