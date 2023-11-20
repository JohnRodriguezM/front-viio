import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { viioSlice } from "./toolkit/slice/viio-slice";

/**
 * Configuration object for persisting state in the application.
 * @typedef {Object} PersistConfiguration
 * @property {string} key - The key used to store the state in the storage.
 * @property {Object} storage - The storage object used to persist the state.
 * @property {string[]} whitelist - The list of state properties to be persisted.
 */
const persistConfiguration = {
  key: "viio-app",
  storage,
  whitelist: ["auth", "layout"],
};

const appReducers = combineReducers({
  viioSlice: viioSlice.reducer,
});

const persist = persistReducer(persistConfiguration, appReducers);

export const store = configureStore({
  middleware: [thunk],
  reducer: persist,
});

