import { createSlice } from '@reduxjs/toolkit';


const phonebookSlice = createSlice({
    name: 'phonebook',
    initialState: {
        contacts: [],
        filter: "",
    },
    reducers: {
        addContactAction(state, { payload }) {
            state.contacts.push(payload);
        },
        deleteContactAction(state, { payload }) {
            state.contacts = state.contacts.filter(({ id }) => id !== payload);
        },
        filterAction(state, { payload }) {
            state.filter = payload;
        },
    },
});

export const { addContactAction, deleteContactAction, filterAction } = phonebookSlice.actions;


export const phonebookReducer = phonebookSlice.reducer

