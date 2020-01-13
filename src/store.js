import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
// create a store with reducers, and use applyMiddleware(thunk)
// so that it can fetch data with a async function
const store = createStore(reducers, applyMiddleware(thunk));
export default store;
