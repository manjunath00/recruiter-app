import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducers";

const composeEnhancers = composeWithDevTools({ trace: true});

const store = createStore(rootReducer, composeEnhancers());

export default store;