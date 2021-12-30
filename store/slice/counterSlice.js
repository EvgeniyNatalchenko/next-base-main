import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        inc: (state, {type, payload}) => {
            return state += payload
        },
        dec: (state, {type, payload}) => {

            return state -= payload
        },
        reset: () => 0
    }
})

export const {inc,dec,reset} = counterSlice.actions
export default counterSlice.reducer
