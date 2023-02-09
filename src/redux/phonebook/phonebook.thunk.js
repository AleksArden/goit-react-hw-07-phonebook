import axios from "axios";
import { fetchingError, fetchingInProgres, fetchingSuccess, fetchingAddContactSuccess, } from 'redux/phonebook/phonebook.slice'

const contactsApi = axios.create({
    baseURL: "https://63e4ff1ac04baebbcdb10925.mockapi.io",
})

export const fetchGetContacts = () => async dispatch => {
    try {
        dispatch(fetchingInProgres());
        const { data } = await contactsApi.get("/contacts");

        dispatch(fetchingSuccess(data))
    } catch (error) {
        dispatch(fetchingError(error.message))
    }
}

export const fetchAddContact = () => async dispatch => {
    try {
        dispatch(fetchingInProgres());
        const { data } = await contactsApi.post("/contacts");
        console.log(data)
        dispatch(fetchingAddContactSuccess(data));
    } catch (error) {
        dispatch(fetchingError(error.message))
    }
}

