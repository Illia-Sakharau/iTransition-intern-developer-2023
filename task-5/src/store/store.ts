import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';

import { PersonsAPI } from '../API/PersonsAPI';
import personsParams from './reducers/personsParams';
import persons from './reducers/persons';

const rootReducer = combineReducers({
  personsParams,
  persons,
  [PersonsAPI.reducerPath]: PersonsAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(PersonsAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispath = AppStore['dispatch'];
