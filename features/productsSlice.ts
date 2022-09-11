import { createSlice } from "@reduxjs/toolkit";
interface Iproduct {
  id:number,
  title:string,
  price:number,
  description:string,
  category:string,
  image:string,
  count:number,
  rating: {
    rate:number,
    count:number,
  },
}

type Iproducts = Iproduct[]

const initialState:(Iproducts) = []

export const productsSlice = createSlice({
  name:"products",
  initialState,
  reducers: {
    add: (state, action) => {//payload is whole object
      if (state.filter(obj => obj.id === action.payload.id)[0]) {//if obj is already there
        const interim = state.filter(obj => obj.id !== action.payload.id)
        const objToIncrease = state.filter(obj => obj.id === action.payload.id)[0]
        objToIncrease.count += 1
        state = [...interim, objToIncrease]
      }
      else {
        action.payload.count = 1
        state = [...state, action.payload]
        return state
      }
    },
    increaseCount: (state, action) => {//payload is just id
      const interim = state.filter(obj => obj.id !== action.payload)
      const objToIncrease = state.filter(obj => obj.id === action.payload)[0]
      objToIncrease.count += 1
      state = [...interim, objToIncrease]
    },
    decreaseCount: (state, action) => {
      const interim = state.filter(obj => obj.id !== action.payload)
      const objToDecrease = state.filter(obj => obj.id === action.payload)[0]
      if (objToDecrease.count === 1) {
        return interim
      }
      else {
        objToDecrease.count -= 1
        state = [...interim, objToDecrease]
      }
    }
  }
})

export const { add, increaseCount, decreaseCount } = productsSlice.actions

export default productsSlice.reducer