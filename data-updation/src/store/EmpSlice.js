

import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    users:[],
    laoding:false,
    error:null
}

export const getEmployeeDetails = createAsyncThunk("empDetails",async()=>{
    const response= await fetch("https://66cc16e04290b1c4f19bdd54.mockapi.io/user")
    const data = await response.json();
    return data
})

export const empSlice= createSlice({
    name:"datails",
    initialState,
    reducers:{
     
    },
    extraReducers:(builder)=>{
        builder.addCase(getEmployeeDetails.fulfilled,(state,action)=>{
            state.users=action.payload;
        })

    }

})




export default empSlice.reducer