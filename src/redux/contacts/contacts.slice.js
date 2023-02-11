import { createSlice } from '@reduxjs/toolkit';
import { fetchContactsThunk, addContactThunk, deleteContactThunk } from './contacts.thunk';

const contactsInitState = {
    items: [],
    isLoading: false,
    error: null,
}

const handlePending = state => {
    state.isLoading = true;
}
const handleRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitState,
    extraReducers: {
        [fetchContactsThunk.pending]: handlePending,
        [addContactThunk.pending]: handlePending,
        [deleteContactThunk.pending]: handlePending,
        [fetchContactsThunk.rejected]: handleRejected,
        [addContactThunk.rejected]: handleRejected,
        [deleteContactThunk.rejected]: handleRejected,
        [fetchContactsThunk.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.error = null;
            state.items = payload
        },
        [addContactThunk.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.error = null;
            state.items.push(payload);
        },
        [deleteContactThunk.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.error = null;
            state.items = state.items.filter(({ id }) => id !== payload)
        },
    }
},
);

export const contactsReducer = contactsSlice.reducer;
