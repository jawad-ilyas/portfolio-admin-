import { configureStore } from "@reduxjs/toolkit"
import modelReducer from "../features/model/modelSlice"
import projectReducer from "../../../Admin - Copy (2)/src/features/Project/projectSlice"
export const store = configureStore({
    reducer: {
        model : modelReducer,
        project: projectReducer
    }

})