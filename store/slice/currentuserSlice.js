import { createSlice } from "@reduxjs/toolkit";

const currentuserSlice = createSlice({
    name: 'currentuser',
    initialState: null,
    reducers: {
        setCurrentUser: (state, {payload}) => {
            console.log("currentuser id====="+payload+" state="+state);
            return payload;
        },
        exit: () => {
            console.log("currentuser exit");
          return  null;
        
        }
    }
})

export const {setCurrentUser,exit} = currentuserSlice.actions
export default currentuserSlice.reducer