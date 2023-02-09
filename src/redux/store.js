import { configureStore } from "@reduxjs/toolkit";
import { phonebookReducer } from "./phonebook/phonebook.slice";


export const store = configureStore({
    devTools: true,
    reducer: {
        phonebook: phonebookReducer,
    },

})





