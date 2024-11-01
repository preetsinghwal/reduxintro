// import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
// import { thunk } from "redux-thunk";
// import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";

// const rootStore = combineReducers({
//     account: accountReducer,
//     customer: customerReducer
// })
// const store = createStore(rootStore, composeWithDevToolsDevelopmentOnly(applyMiddleware(thunk)));

const store = configureStore({reducer:{
    account: accountReducer,
    customer: customerReducer
}})

export default store
