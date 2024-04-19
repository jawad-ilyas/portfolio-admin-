import { createSlice } from "@reduxjs/toolkit";


const initialState = ({
    footerNewsletterDatas: []
})


export const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        fetchContactNewsLetter: (state, action) => {
            state.footerNewsletterDatas = action.payload.data;

        }
    }
})


export const { fetchContactNewsLetter } = contactSlice.actions

export default contactSlice.reducer