import { combineReducers, configureStore } from '@reduxjs/toolkit';
import currentUserSlice from './reducers/currentUserSlice';

const rootReducer = combineReducers({
  currentUserSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispath = AppStore['dispatch'];
