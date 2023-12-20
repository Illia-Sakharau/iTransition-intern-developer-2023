import { createSlice } from '@reduxjs/toolkit';
import { Person } from '../../types/persons';
import { PersonsAPI } from '../../API/PersonsAPI';

const initialState: {list: Person[]} = {
  list: []
};

export const persons = createSlice({
  name: 'usersList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      PersonsAPI.endpoints.getPersons.matchFulfilled,
      (state, { payload }) => {
        state.list = [...state.list, ...payload];
      }
    )
  }
});

export default persons.reducer;
