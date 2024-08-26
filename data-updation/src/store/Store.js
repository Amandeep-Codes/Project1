import { configureStore } from "@reduxjs/toolkit";
import empSlice  from "./EmpSlice"; // Import the default export from EmpSlice

const store = configureStore({
  reducer: {
    empDetails: empSlice // Use the reducer from empSlice
  },
});

export default store;
