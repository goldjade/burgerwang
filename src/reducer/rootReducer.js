import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";
import cartReducer from "./cartReducer";
import userSlice from "./userSlice";
import addressReducer from "./addressReducer";
import storeInfoReducer from "./storeInfoReducer";

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  whitelist: ["cart", "address", "user", "storeInfo"],
};

export const rootReducer = combineReducers({
  cart: cartReducer.reducer,
  user: userSlice.reducer,
  address: addressReducer.reducer,
  storeInfo: storeInfoReducer.reducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
