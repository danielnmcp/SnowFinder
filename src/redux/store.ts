import AsyncStorage from "@react-native-async-storage/async-storage";
import { spawn } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import {configureStore} from "@reduxjs/toolkit";
import { watchAuth } from "./authActions";
import { authReducer } from "./authReducer";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield spawn(watchAuth);
}

const rootReducer = combineReducers({
  authReducer: authReducer ,
});

const persistConfig = {
  key: "root",
  whitelist: ["authReducer","monitoringReducer"],
  storage: AsyncStorage,
};


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer:persistedReducer,
  middleware:[sagaMiddleware],
}
);
export type Redux = ReturnType<typeof persistedReducer>;

export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);