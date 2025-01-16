import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import taskReducer from './taskSlice'
import filterReducer from './filterSlice'

export const store = configureStore({
    reducer: {
        taskReducer,
        filterReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})