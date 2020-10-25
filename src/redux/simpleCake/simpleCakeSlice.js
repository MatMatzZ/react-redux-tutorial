import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'counter',
    initialState: {
      value: 100,
    },
    reducers: {
        buycake: (state)=>{
            state.value -= 1
        },
        buyWithQuantity: (state,action) =>{
            state.value -= action.payload
        }
    }
})

export const {buycake,buyWithQuantity} = slice.actions

export const buyAsync = amount => dispatch =>{
    setTimeout(() => {
        dispatch(buyWithQuantity(amount))
      }, 1000);
}

export const selectCount = (state) => state.counter.value

export default slice.reducer