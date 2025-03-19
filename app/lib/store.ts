import { configureStore,combineReducers } from '@reduxjs/toolkit'
import cartSlice from "./features/cartSlice"
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import menuSlice from "./features/menuSlice"
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

export const makeStore = () => {
  const persistConfig = {
    key: "root",
    storage,
  };
  const rootReducer = combineReducers({
    menu: menuSlice, // First slice
    cart : cartSlice, // Second slice
  });
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  return configureStore({
    reducer: persistedReducer ,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          // Ignore non-serializable values from redux-persist
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }})
})}
const store = makeStore();

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export const persistor = persistStore(store);
export default store;
