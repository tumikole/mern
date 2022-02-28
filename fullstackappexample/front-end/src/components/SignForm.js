import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser} from "../redux/actions/auth";
import {useNavigate} from 'react-router-dom'



function SignUpForm() {
    const state = useSelector((state) => state)
    const dispatch = useDispatch();
  const [formDetail, setFormDetail] = useState({ email: "", password: "" });
  const navigate = useNavigate()

  useEffect(() => {
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();    
    dispatch(signUpUser(formDetail , navigate));
    console.log(state)
  };

  const handleChange = (e) => {
    setFormDetail({ ...formDetail, [e.target.name]: e.target.value });
  };
  return (
    <div className="">   
    <h1>  Sign up </h1>
    <p style={{color:"red"}}>   {state.auth.error} </p> 
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{ display: "grid", margin: "10rem 10rem" }}
      >
        <input
          type="text"
          placeholder="email"
          value={formDetail.email}
          onChange={(e) => handleChange(e)}
          name="email"
        />
        <input
          type="text"
          placeholder="password"
          value={formDetail.password}
          onChange={(e) => handleChange(e)}
          name="password"
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default SignUpForm;
