import { configureStore } from "@reduxjs/toolkit";
import empSlice  from "./EmpSlice";
 // Import the default export from EmpSlice
import { deleteEmpDetails } from "./EmpSlice";
const store = configureStore({
  reducer: {
    empDetails: empSlice, // Use the reducer from empSlice
    deleteEmpDetails:empSlice
  },
});

export default store;
