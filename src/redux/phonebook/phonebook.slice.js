import { createSlice } from '@reduxjs/toolkit';


const phonebookSlice = createSlice({
    name: 'phonebook',
    initialState: {
        contacts: {
            items: [],
            isLoading: false,
            error: null,
        },
        filter: '',
    },
    reducers: {
        fetchingInProgres(state) {
            state.contacts.isLoading = true;
        },
        fetchingSuccess(state, { payload }) {
            state.contacts.isLoading = false;
            state.contacts.error = null;
            state.contacts.items = payload;
        },
        fetchingError(state, { payload }) {
            state.contacts.isLoading = false;
            state.contacts.error = payload;
        },
        fetchingAddContactSuccess(state, { payload }) {
            state.contacts.isLoading = false;
            state.contacts.error = null;
            state.contacts.items.push(payload);
        },

        filterAction(state, { payload }) {
            state.filter = payload;
        },
    },
});

export const { addContactAction, deleteContactAction, filterAction, fetchingError, fetchingInProgres, fetchingSuccess, fetchingAddContactSuccess } =
    phonebookSlice.actions;

export const phonebookReducer = phonebookSlice.reducer;
