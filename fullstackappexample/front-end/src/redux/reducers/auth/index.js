
import * as actions from "../../actionTypes/auth";
import jwt_decode from "jwt-decode";

const initialState = {
  token: null,
  user: {},
  error: null
//   user : {}
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SIGN_UP:
      return {
        ...state,
        token: action.payload,
        user:action.payload.token ?  jwt_decode(action.payload.token) : null,
        error: action.payload.error ? action.payload.error : null 
      };
          
    default:
      return state;
  }

}