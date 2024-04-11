import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    aboutDatas: []
}


export const AboutSlice = createSlice({

    name: "about",
    initialState,
    reducers: {
        fetchData: (state, action) => {
            const aboutData = {
                data: action.payload.data,
                loading: action.payload.loading
            }
            state.aboutDatas.push(aboutData)
        }
    }
})

export const { fetchData } = AboutSlice.actions
export default AboutSlice.reducer