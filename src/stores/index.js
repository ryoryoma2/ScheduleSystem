import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

// それぞれ slice.reducer を default export している前提
import studentAttendanceReducer from "./studentAttendance";
import teacherAttendanceReducer from "./teacherAttendance";

const reducer = combineReducers({
    studentAttendance: studentAttendanceReducer,
    teacherAttendance: teacherAttendanceReducer
});

const store = configureStore({ reducer });

export default store;