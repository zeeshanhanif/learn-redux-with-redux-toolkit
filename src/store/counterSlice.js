import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "Counter",
    initialState : {
        count: 0
    },
    reducers: {
        increment: (state)=>{
            state.count++
        },
        decrement: (state)=> {
            state.count--;
        },
        incrementByAmount: (state,action)=> {
            state.count+=action.payload
        }

    }
});

export const { increment, decrement, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;