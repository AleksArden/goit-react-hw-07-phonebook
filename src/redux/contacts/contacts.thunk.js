import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const contactsApi = axios.create({
    baseURL: "https://63e4ff1ac04baebbcdb10925.mockapi.io",
})

export const fetchContactsThunk = createAsyncThunk("contacts/fetchAll", async () => {
    const { data } = await contactsApi.get("/contacts");
    return data
})

export const addContactThunk = createAsyncThunk("contacts/addContact", async contact => {
    const { data } = await contactsApi.post("/contacts", contact);
    return data
})
export const deleteContactThunk = createAsyncThunk("contacts/deleteContact", async id => {
    const { data } = await contactsApi.delete(`/contacts/${id}`);
    return data.id;
})