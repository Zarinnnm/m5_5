import { configureStore } from "@reduxjs/toolkit";
import titleReducer from './titleSlice'
import logger from "redux-logger";

export const store = configureStore({
    reducer: {
        titleReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})