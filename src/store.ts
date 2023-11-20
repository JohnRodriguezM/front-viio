import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { viioSlice } from "./toolkit/slice/viio-slice";

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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
