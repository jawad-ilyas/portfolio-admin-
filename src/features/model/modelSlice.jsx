import { createSlice, nanoid } from "@reduxjs/toolkit"
const initialState = {
    isModelState:
        [{ id: 1, isModelOpen: false }]

}
const modelSlice = createSlice({

    name: "model",
    initialState,
    reducers: {
        openCloseModel: (state, action) => {
            console.log("action . payload ", action.payload)
            const modelIndex = state.isModelState.findIndex(model => model.id === action.payload.id);
            console.log("modelIndex into model slice :  ", modelIndex)
            if (modelIndex !== -1) {
                state.isModelState[modelIndex].isModelOpen = action.payload.isModelOpen;
            } else {
                // Handle case where the provided ID doesn't exist in the state
            }
        }
    }
})
export const { openCloseModel } = modelSlice.actions
export default modelSlice.reducer