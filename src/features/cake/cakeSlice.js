import { createSlice } from '@reduxjs/toolkit'

const initalState={
    numberOfCakes:10
}
const cakeSlice=createSlice({
    name:'cake',
    initialState:initalState,
    reducers:{
        ordered:(state)=>{
            state.numberOfCakes--
        },
        reStocked:(state,action)=>{
            state.numberOfCakes+=action.payload
        }
    }
})

export default cakeSlice.reducer
export const{ordered,reStocked}=cakeSlice.actions
