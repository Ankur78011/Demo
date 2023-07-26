import { useDispatch, useSelector } from "react-redux"
import { ordered } from "./cakeSlice"

// import {useSelector} from 'react-redux'
const CakeView = () => {

//    const cakes=useSelector((state)=>state.cake.numberOfCakes)
const cakess=useSelector((state)=>state.cake.numberOfCakes)
const dispatch=useDispatch()
  return (
    <div>
       <h1>number of cake {cakess} </h1>
       <button onClick={()=>dispatch(ordered())}>cake ordered</button>
       <button>cake restocked</button>
    </div>
  )
}

export default CakeView
