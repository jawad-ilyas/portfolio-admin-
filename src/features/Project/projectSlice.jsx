import { createSlice } from "@reduxjs/toolkit"
import ProjectCategory from "../../Pages/Projects/ProjectCategory"


const initialState = ({

  projects: [],
  ProjectCats: []
})

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {

    addDataIntoPorject: (state, action) => {

      const createProject = {
        projectName: action.payload.projectName,
        projectDeployLink: action.payload.projectDeployLink,
        projectGithubLink: action.payload.projectGithubLink,
        projectDescription: action.payload.projectDescription

      }

      state.projects.push(createProject)
    },

    addDataIntoProjectCategory: (state, action) => {

      state.ProjectCats = action.payload
      console.log("addDataIntoProjectCategory", action.payload)
    }
  }
})

export const { addDataIntoPorject, addDataIntoProjectCategory } = projectSlice.actions
export default projectSlice.reducer