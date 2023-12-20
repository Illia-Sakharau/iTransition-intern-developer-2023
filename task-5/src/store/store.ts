import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';

import { PersonsAPI } from '../API/PersonsAPI';

// import currentUserSlice from './reducers/currentUserSlice';
// import selectedUsersSlice from './reducers/selectedUsersSlice';
// import usersSlice from './reducers/usersSlice';
// import { AuthAPI } from '../API/AuthAPI';
// import { UserAPI } from '../API/PersonsAPI';

const rootReducer = combineReducers({
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
