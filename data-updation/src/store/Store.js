import { configureStore } from "@reduxjs/toolkit";
import empSlice  from "./EmpSlice";
 // Import the default export from EmpSlice
import { deleteEmpDetails } from "./EmpSlice";
import addSlice from "./AddSlice";
import updateSlice from "./UpdateSlice"
const store = configureStore({
  reducer: {
    empDetails: empSlice, // Use the reducer from empSlice
    deleteEmpDetails:empSlice,
    addData:addSlice,
    updatedData:updateSlice
  },
});

export default store;
