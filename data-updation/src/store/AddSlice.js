import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export const addEmployeeData = createAsyncThunk("addData", async (data) => {
  const response = await fetch(
    "https://66cc16e04290b1c4f19bdd54.mockapi.io/user",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  const result = await response.json();
});

const addSlice = createSlice({
  name: "addData",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(addEmployeeData.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addEmployeeData.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.users.push(action.payload);
      })
      .addCase(addEmployeeData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message
      });
  },
});

export default addSlice.reducer;
//export const { addEmpData } = addSlice.actions;
