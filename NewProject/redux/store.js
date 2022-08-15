import {configureStore,combineReducers } from "@reduxjs/toolkit"
import userReducer from './LoginRedux'
import registerReducer from "./RegisterRedux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import addressReducer from "./AddressRedux";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist"

  const persistConfig = {
    key: "root",
    version: 1,
    storage:AsyncStorage,
    // whitelist: ["Student"]
  }
  
  const rootReducer = combineReducers({ user: userReducer , register: registerReducer ,address: addressReducer});

  const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store)