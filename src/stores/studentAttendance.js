import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        date: '',
        is_attendance: false
    }
];

const slice = createSlice({
    name: "studentAttendance",
    initialState,
    reducers: {
        fetchStart: state => {
            return Object.assign({}, state, { date: '', is_attendance: false })
        },
        fetchSucceed: (state, action) => {
            return Object.assign({}, state, { date: action.payload, is_attendance: true });
        },
        fetchFaild: (state, action) => {
            console.error(action.payload);
        },
        clear: (state, action) => {
            state.splice(action.payload, 1)
        }
    }
});

// Reducerをエクスポートする
export default slice.reducer;

// Action Creatorsをエクスポートする
export const { setName, clearName } = slice.actions;
