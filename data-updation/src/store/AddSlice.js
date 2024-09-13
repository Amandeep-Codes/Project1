import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  admin:[],
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

export const fetchAdminDetails = createAsyncThunk(
  "fetchCredentials",
  async (_, { rejectWithValue }) => {
   
    try {
      const response = await fetch("https://66cc16e04290b1c4f19bdd54.mockapi.io/credential", {
        method: "GET",

      });

      if (!response.ok) {
        throw new Error("Failed to fetch admin details"); // Handle response errors
      }

      const result = await response.json();
      console.log("api result",result)
      return result; // Return the fetched admin details
      
    } catch (error) {
      return rejectWithValue(error.message); // Pass error to rejected case
    }
  }
);

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
 
    builder
    .addCase(fetchAdminDetails.pending,(state)=>{
      state.loading=true;
      state.error=null
    })
    .addCase(fetchAdminDetails.fulfilled,(state,action)=>{
      state.loading=false;
      state.admin=action.payload;
      console.log("admin details",state.admin)

    })
    .addCase(fetchAdminDetails.rejected,(state,action)=>{
      state.loading=false;
      state.error=action.error.message || action.payload
    })

  
  }
});

export default addSlice.reducer;
//export const { addEmpData } = addSlice.actions;
