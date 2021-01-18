import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    date: '',
    attendance: false
};

const slice = createSlice({
    name: "studentAttendance",
    initialState,
    reducers: {
        setDate: (state, action) => {
            return Object.assign({}, state, { name: action.payload })
        },
        //   clearDate: state => {
        //     return Object.assign({}, state, { name: "" })
        //   },
        // etc...
    }
});

// Reducerをエクスポートする
export default slice.reducer;

// Action Creatorsをエクスポートする
export const { setName, clearName } = slice.actions;