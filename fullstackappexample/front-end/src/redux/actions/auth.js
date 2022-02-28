import axios from "axios";
import * as actions from "../actionTypes/auth";

export const signUpUser = (userDetails, navigate) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/sign-up",
        userDetails
      );
      dispatch({ type: actions.SIGN_UP, payload: response.data });
      navigate("/");
      localStorage.setItem("token", response.data.token);
    } catch (e) {
      console.log(e);
    //   dispatch({ type: actions.UPDATE_ERROR , payload : e})
    }
  };
};
