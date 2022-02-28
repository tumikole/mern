import { booksReducer } from "./books/booksReducer";
import {authReducer} from './auth/index'

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  books: booksReducer,
  auth : authReducer
});

export default rootReducer;