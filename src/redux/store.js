import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/features/counter/counterSlice"
const redux = configureStore({
    reducer: {
        counter: counterReducer
    },
})
export default redux;