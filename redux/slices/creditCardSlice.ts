import { createSlice } from '@reduxjs/toolkit';

type StateType = {
    creditCards: any[];
};

const initialState: StateType = {
    creditCards: []
};

export const creditCardSlice = createSlice({
    name: 'creditCard',
    initialState,
    reducers: {
        addCreditCard: (state, actions) => {
            state.creditCards = [...state.creditCards, actions.payload];
        }
    }
});

export const { addCreditCard } = creditCardSlice.actions;

export default creditCardSlice.reducer;
