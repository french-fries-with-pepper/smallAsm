import { configureStore } from "@reduxjs/toolkit";

import codeReducer from "./reducers/codeReducer";

let store = configureStore({ reducer: codeReducer, devTools: true });

export default store;
