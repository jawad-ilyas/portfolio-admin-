import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios"

export const fetchSKill = createAsyncThunk(
    'skill/fetchskill',
    async (_, thunkAPI) => { // Payload creator function
        try {
            const response = await axios.get("http://localhost:8080/api/v1/skill/fetchskill");
            // console.log("response of the fetch skill async thunk " , response)
            return response?.data?.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)
export const createSkill = createAsyncThunk(
    'skill/createSkill',
    async (formData, thunkAPI) => {
        try {
            const response = await axios.post(
                'http://localhost:8080/api/v1/skill/createskill',
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    }
                }
            );
            return response.data?.data;
        } catch (error) {
            // console.log("Error creating skill:", error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const deleteSkill = createAsyncThunk(
    'skill/deleteSkill',
    async (id, thunkAPI) => {
        console.log("delete skill id "  , id)
        try {
            const response = await axios.put("http://localhost:8080/api/v1/skill/deleteSkill", {id});
            console.log("resposne of the delete skill ", response)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)

const skillSlice = createSlice({
    name: "skill",
    initialState: {
        skills: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSKill.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(fetchSKill.fulfilled, (state, action) => {
                // console.log("action payload of the fetch skill fullfiled " , action.payload)
                state.skills = action.payload;
                state.loading = false;
            })
            .addCase(fetchSKill.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Failed to fetch reviews';

            })
            .addCase(createSkill.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createSkill.fulfilled, (state, action) => {
                state.loading = false
            })
            .addCase(createSkill.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Failed to fetch reviews';

            })
    }
})

export default skillSlice.reducer;
