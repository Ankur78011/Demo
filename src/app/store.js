import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from '../features/cake/cakeSlice'
import iceCreamReducer from '../features/icecream/icecreamslice'



const Store=configureStore({
    reducer:{
        cake:cakeReducer,
       icecream:iceCreamReducer,
  
    }
})
export default Store


