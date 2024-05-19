import { createSlice, asyncThunkCreator, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios"


export const fetchWorkExperience = createAsyncThunk("workExperience/fetchworkexperience",

    async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/experience/fetchworkexperience'); // Replace with your API endpoint
            return response.data.data;
        } catch (error) {
            throw error;
        }
    },
)

export const fetchExperience = createAsyncThunk("workExperience/fetchExperience",


    async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/experience/fetchexperiences'); // Replace with your API endpoint

            console.log("fetch experience into skill experience ", response.data)
            return response?.data?.data
        } catch (error) {
            throw error;

        }
    }
)
export const fetchSkill = createAsyncThunk("workExperience/fetchSkill",


    async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/skill/fetchskill'); // Replace with your API endpoint

            console.log("fetch skill into skill experience ", response.data)
            return response?.data?.data
        } catch (error) {
            throw error;

        }
    }
)


// Async thunk to delete work experience data
export const deleteWorkExperience = createAsyncThunk(
    "workExperience/deleteWorkExperience",
    async (id) => {
        try {
            console.log("delete id into work experience", id)
            await axios.delete(`http://localhost:8080/api/v1/experience/deleteworkexperience/${id}`); // Replace with your API endpoint
            return id;
        } catch (error) {
            throw error;
        }
    }
);
export const deleteExperience = createAsyncThunk(
    "workExperience/deleteExperience",
    async (id) => {
        try {
            console.log("delete id into work experience", id)
            await axios.delete(`http://localhost:8080/api/v1/experience/deleteexperience/${id}`); // Replace with your API endpoint
            return id;
        } catch (error) {
            throw error;
        }
    }
);

const initialState = ({
    items: [],
    works: [],
    skills: [],
    status: 'idle',
    error: null,
})




// Slice definition
const skillExperienceSlice = createSlice({
    name: 'skillExperience',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        updateItem: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        },
        deleteItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWorkExperience.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchWorkExperience.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchWorkExperience.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchSkill.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchSkill.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.skills = action.payload;
            })
            .addCase(fetchSkill.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(deleteWorkExperience.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteWorkExperience.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = state.items.filter((item) => item.id !== action.payload);
            })
            .addCase(deleteWorkExperience.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchExperience.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchExperience.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.works = action.payload
            })
            .addCase(fetchExperience.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(deleteExperience.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteExperience.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.works = state.items.filter((item) => item.id !== action.payload);
            })
            .addCase(deleteExperience.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    },
});


export const { deleteItem, addItem, updateItem } = skillExperienceSlice.actions
export default skillExperienceSlice.reducer;
