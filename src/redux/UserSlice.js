import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios"

export const getUsers=createAsyncThunk('gets/getUsers',async()=>{
    return Axios.get('https://jsonplaceholder.typicode.com/users').then (res=>{
        return res.data
    })
})
const userSlice=createSlice({
    name:"users",
    initialState:{
        users:[],
        loading:false
    },
    extraReducers:{
        [getUsers.pending]:(state,action)=>{
            state.loading=true;
            state.users=action.payload;
        },
        [getUsers.fulfilled]:(state,action)=>{
            state.loading=false;
            state.users=action.payload;
        },
        [getUsers.rejected]:(state,action)=>{
            state.loading=false;
        },
    }
})
export default userSlice.reducer