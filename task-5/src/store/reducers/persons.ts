import { createSlice } from '@reduxjs/toolkit';
import { Person } from '../../types/persons';
import { PersonsAPI } from '../../API/PersonsAPI';

type Slice = {
  list: Person[],
}

const initialState: Slice = {
  list: [],
};

export const persons = createSlice({
  name: 'usersList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        PersonsAPI.endpoints.getPersons.matchFulfilled,
        (state, { payload }) => {
          state.list = payload;
        }
      )
  }
});

export default persons.reducer;
