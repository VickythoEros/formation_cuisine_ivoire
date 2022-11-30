import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth"
import messagesReducer from "./slices/messages"

export const store = configureStore({
    reducer:{
        auth: authReducer,
        message: messagesReducer,
    },
    devTools: true
})

