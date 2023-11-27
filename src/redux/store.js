import { createStore } from "redux";
import { contactReducer } from "./reducers/contactsReducer";

export const store = createStore(contactReducer)