import { createSlice } from "@reduxjs/toolkit";
// import { act } from "react-dom/test-utils";
 const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            //mutuating our state
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items=state.items.filter((item)=>{
                return item?.info.id !==action.payload
            });
        },
        clearCart:(state)=>{
            state.items.length=[];
        },
    },

 })
 export const{addItem, removeItem, clearCart}=cartSlice.actions;
 export default cartSlice.reducer;