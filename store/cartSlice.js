import { createSlice } from "@reduxjs/toolkit";


const initial = {
    cart : []
}

const cartSlice = createSlice({
    name : "cart",
    initialState : initial,
    reducers : {
        addToCart : (state,action)=>{
            const item = state.cart.find((item)=> item.id.toString() === action.payload.id)
            if(item){
                item.quanitiy +=1
            }
            else{
                state.cart.push({...action.payload, quanitiy : 1})
            }
        },
        increaseQty : (state,action)=>{
            const item = state.cart.find((item)=> item.id.toString() === action.payload.id)
            if(item){
                item.quanitiy +=1
            }
        },
        decreaseQty : (state,action)=>{
            const item = state.cart.find((item)=> item.id.toString() === action.payload.id)
            if(item){
                item.quanitiy -=1
            }
        },
        
    }
})

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer