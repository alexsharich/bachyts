import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type USliceType = {
    users:Array<any>
}

const initialState:USliceType = {
    users: []
}

const uSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
setUsers:(state,action:PayloadAction<any>)=>{
    
}
}})
export const {setUsers} = uSlice.actions
export const users = uSlice.reducer