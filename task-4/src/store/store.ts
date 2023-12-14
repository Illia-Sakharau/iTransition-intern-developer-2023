import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import currentUserSlice from './reducers/currentUserSlice';
import { AuthAPI } from '../API/AuthAPI';
import { UserAPI } from '../API/UserAPI';

const rootReducer = combineReducers({
  currentUserSlice,
  [AuthAPI.reducerPath]: AuthAPI.reducer,
  [UserAPI.reducerPath]: UserAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(AuthAPI.middleware).concat(UserAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispath = AppStore['dispatch'];
