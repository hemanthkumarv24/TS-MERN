import { createSlice } from '@reduxjs/toolkit'


export interface CounterState {
    name: string
}

const initialState: CounterState = {
    name: 'Hemanth',
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    update:(state,action) => {
        state.name = action.payload.name
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { update } = accountSlice.actions

export default accountSlice.reducer