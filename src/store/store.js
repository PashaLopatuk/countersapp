import { createStore } from "redux";
import accountsReducer from "./reducers/accountsReducer";

const store = createStore(accountsReducer);

export default store;