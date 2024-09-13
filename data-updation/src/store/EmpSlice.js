

import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    users:[],
    loading:false,
    error:null,
    searchData:" "
}

export const getEmployeeDetails = createAsyncThunk("empDetails",async()=>{
    const response= await fetch("https://66cc16e04290b1c4f19bdd54.mockapi.io/user")
    const data = await response.json();
    return data
})

export const deleteEmpDetails= createAsyncThunk("empdetails/deleteData",async(id)=>{
    const response=  await fetch(`https://66cc16e04290b1c4f19bdd54.mockapi.io/user/${id}`,{
        method:"DELETE",
        headers: {
            'Content-Type': 'application/json'
          }
    }
    )
    return id


})








export const empSlice= createSlice({
    name:"empdetails",
    initialState,
    reducers:{
        searchEmpDetails:(state,action)=>{
           state.searchData = action.payload
           //console.log(`state is+${state.searchData}`)
            
    },
     
    },
    extraReducers:(builder)=>{
        builder.addCase(getEmployeeDetails.pending,(state,action)=>{
            state.loading=true;
            state.error=null;
        })
        builder.addCase(getEmployeeDetails.fulfilled,(state,action)=>{
            state.users=action.payload;
            state.loading=false;

        })

        builder.addCase(getEmployeeDetails.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message

        })


        builder
        .addCase(deleteEmpDetails.pending,(state,action)=>{
            state.loading = true;
           state. error=null
        })
        builder.addCase(deleteEmpDetails.fulfilled,(state,action)=>{
            state.users= state.users.filter(user=> user.id !== action.payload)
            state.loading=false;
        })

        builder.addCase(deleteEmpDetails.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message

        })
    }

})



export const{searchEmpDetails}=empSlice.actions

export default empSlice.reducer
 