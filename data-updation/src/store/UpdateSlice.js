import { createSlice,asyncThunkCreator, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    updateddetails:[],
    loading:false,
    error:null
}

export const updateEmpData=createAsyncThunk("updateData",async(updatedData)=>{
    const response = await fetch(`https://66cc16e04290b1c4f19bdd54.mockapi.io/user/${updatedData.id}`,{
        method:"PUT",
        body: JSON.stringify(updatedData),
        headers: {
            "Content-type": "application/json",
          },
    })
    const data = await response.json();
    return data
})
 


export const updateSlice= createSlice({
    name:"updateSlice",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{

        builder.addCase(updateEmpData.pending,(state)=>{
            state.loading=true
            state.error =null

        })

        .addCase(updateEmpData.fulfilled,(state,action)=>{
            state.loading = false;
            const index = state.updateddetails.findIndex(user => user.id === action.payload.id);
            if (index !== -1) {
              state.updateddetails[index] = action.payload;

        }
        else{
            
                state.updateddetails.push(action.payload); 
              
        }
        window.location.reload();
    })

        .addCase(updateEmpData.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })
    }

})

export default updateSlice.reducer
 
