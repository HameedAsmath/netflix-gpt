import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGPTSearch: false
    },
    reducers: {
        toogleGPTSearchView: (state,action) => {
            state.showGPTSearch = !state.showGPTSearch
        }
    }
})

export const {toogleGPTSearchView} = GPTSlice.actions
export default GPTSlice.reducer