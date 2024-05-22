import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { handleAsyncError } from "../../Utils/HandleAsyncError";

export const addProjectCategory = createAsyncThunk(
    'projectCategory/addProjectCategory',
    async (data, thunkAPI) => {
        console.log("data of the project categrory add function ", data)
        try {
            const response = await axios.post("http://localhost:8080/api/v1/projectCategory/addProjectCategrory", data);
            console.log("response of the project category", response);
            return response.data; // Return the relevant data
        } catch (error) {
            return handleAsyncError(thunkAPI, error)
        }
    }
);

export const showProjectCategrory = createAsyncThunk(
    'projectCategory/showProjectCategrory',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("http://localhost:8080/api/v1/projectCategory/showProjectCategrory");
            console.log("response of the project category", response?.data?.data);
            return response?.data?.data; // Return the relevant data
        } catch (error) {
            return handleAsyncError(thunkAPI, error)
        }
    }
)

export const deleteProjectCategory = createAsyncThunk(
    'projectCategory/deleteProjectCategory',
    async (id, thunkAPI) => {
        console.log("id of the delete project category ", id)
        try {
            const response = await axios.post("http://localhost:8080/api/v1/projectCategory/deleteProjectCategory", { id });
            console.log("response of the delete  project category", response?.data?.data);
            return response?.data?.data; // Return the relevant data
        } catch (error) {
            return handleAsyncError(thunkAPI, error)
        }
    }
)

const projectCategorySlice = createSlice({
    name: 'projectCategory',
    initialState: {
        projectCategoryDetail: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addProjectCategory.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(addProjectCategory.fulfilled, (state, action) => {
            state.loading = false;
        }).addCase(addProjectCategory.rejected, (state, action) => { // Corrected the typo from adddCase to addCase
            state.loading = false; // Set loading to false in rejected state
            state.error = action.payload || "An error occurred in the add project category rejected case";
        })
            .addCase(showProjectCategrory.fulfilled, (state, action) => {
                state.projectCategoryDetail = action.payload;
                state.loading = false;
            })
            .addCase(deleteProjectCategory.fulfilled, (state, action) => {
                state.loading = false;
            })
    }
});

export default projectCategorySlice.reducer;
