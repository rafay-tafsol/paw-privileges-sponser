import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";

import combineReducer from "./combineReducer";



const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authReducer", "commonReducer"], //cartReducer
  // blacklist: ["commonReducer"],
};

const persistedReducer = persistReducer(persistConfig, combineReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;
