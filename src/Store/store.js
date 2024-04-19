import { configureStore } from "@reduxjs/toolkit"
import modelReducer from "../features/model/modelSlice"
import projectReducer from "../features/Project/projectSlice"
import contactReducer from "../features/Contact/ContactSlice"
export const store = configureStore({
    reducer: {
        model : modelReducer,
        project: projectReducer,
        contact: contactReducer
    }

})