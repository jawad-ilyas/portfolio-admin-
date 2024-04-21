import { configureStore } from "@reduxjs/toolkit"
import modelReducer from "../features/model/modelSlice"
import projectReducer from "../features/Project/projectSlice"
import contactReducer from "../features/Contact/ContactSlice"
import SkillExperienceReducer from "../features/SkillExperience/SkillExperienceSlice"
export const store = configureStore({
    reducer: {
        model: modelReducer,
        project: projectReducer,
        contact: contactReducer,
        skillExperience: SkillExperienceReducer
    }

})