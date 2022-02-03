// Store

// import Reducers
import { combineReducers, createStore } from "redux";
import loginReducer from "./login/index";

const reducers = combineReducers({ loginReducer });

// create store
// root state
const store = createStore(reducers);

export default store;
