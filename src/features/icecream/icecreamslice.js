import { createSlice } from '@reduxjs/toolkit'
const initalState={
    numberOfIceCream:20
}
const iceCreamSlice=createSlice({
    name:'iceCream',
    initialState:initalState,
    reducers: {
        ordered:(state)=>{
          state.numberOfIceCream--
        },
        reStocked:(state,action)=>{
              state.numberOfIceCream=action.payload
        }
    },
})

export default iceCreamSlice.reducer
export const{ordered,reStocked}=iceCreamSlice.actions
