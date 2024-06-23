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
        },
        removeAllCard: (state) => {
            state.creditCards = initialState.creditCards;
        }
    }
});

export const { addCreditCard, removeAllCard } = creditCardSlice.actions;

export default creditCardSlice.reducer;
