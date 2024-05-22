import { configureStore } from "@reduxjs/toolkit"
import modelReducer from "../features/model/modelSlice"
import contactReducer from "../features/Contact/ContactSlice"
import SkillExperienceReducer from "../features/SkillExperience/SkillExperienceSlice"
import SkillReducer from "../features/Skill/SkillSlice"
import projectReducer from "../features/Project/projectSlice"
import projectCategoryReducer from "../features/projectCategory/projectCategorySlice"
export const store = configureStore({
    reducer: {
        model: modelReducer,
        project: projectReducer,
        projectCategory: projectCategoryReducer,
        contact: contactReducer,
        skillExperience: SkillExperienceReducer,
        skill: SkillReducer,
    }

})