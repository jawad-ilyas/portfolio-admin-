import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { handleAsyncError } from "../../Utils/HandleAsyncError"
import axios from "axios"






export const createProjects = createAsyncThunk(
  'project/createProjects',
  async (data, thunkAPI) => {

    console.log("data of the use send into the create project ", data)
    try {
      const response = await axios.post("http://localhost:8080/api/v1/project/createProjects", data)
      // console.log(response)
      return response?.data
    } catch (error) {
      return handleAsyncError(thunkAPI, error)
    }
  }
)


export const fetchProjects = createAsyncThunk(
  'project/fetchProjects',
  async (_, thunkAPI) => {

    try {
      const response = await axios.get("http://localhost:8080/api/v1/project/fetchProjects")
      // console.log("response of the fetch project ", response)
      return response?.data?.data

    } catch (error) {
      return handleAsyncError(thunkAPI, error)

    }
  }

)

export const deleteProjects = createAsyncThunk(
  'project/deleteProjects',
  async (_id, thunkAPI) => {
    try {

      // console.log("delete project slice funciton _id ", _id)

      const response = await axios.delete(`http://localhost:8080/api/v1/project/deleteProjects/${_id}`)
      console.log("deleteProjects :", response?.data)
      return response?.data?.message
    } catch (error) {
      return handleAsyncError(thunkAPI, error)

    }
  }

)

export const updateProject = createAsyncThunk(
  'project/updateProject',
  async (data, thunkAPI) => {

    console.log("updateProject id ", data._id)
    console.log("updateProject data ", data)
    const { _id, ...newData } = data;
    console.log("new dadta " , newData)
    try {
      const respnose = await axios.patch(`http://localhost:8080/api/v1/project/updateProject/${_id}`,newData);
    } catch (error) {
      return handleAsyncError(thunkAPI, error)

    }
  }

)




const initialState = ({

  projects: [],
  loading: false,
  error: null
})

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(createProjects.fulfilled, (state, action) => {
      console.log("create Projects is callled -------------------------")

      state.loading = false
    }).addCase(fetchProjects.fulfilled, (state, action) => {
      state.projects = action.payload;
      state.loading = false
    }).addCase(deleteProjects.fulfilled, (state, action) => {
      state.loading = false
    })
      .addCase(updateProject.fulfilled, (state, action) => {
        state.loading = false
      })

  }
})

export default projectSlice.reducer