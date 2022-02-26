import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import {  md } from "../utils/responsive";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/userApiCall";

const Container = styled.div`
  min-height: 80vh;
  text-align: center;
  padding: 21px;
`;
const Title = styled.h1`
  color: #3a3939;
  margin-top: 0;
`;
const Form = styled.form`
  width: 100%;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin: 15px auto;
  border-radius: 7px;
  ${md({ width: "50%" })}
`;
const Input = styled.input`
  margin-bottom: 21px;
  padding: 5px 10px;
  border: 1px solid gray;
  border-radius: 7px;
  font-size: 21px;
  color: #3a3939;
  &:focus {
    outline: none;
    box-shadow: 0 0 2px 2px skyblue;
  }
`;
const Button = styled.button`
  background-color: green;
  cursor: pointer;
  font-size: 21px;
  color: white;
  border-radius: 7px;
  border: none;
  outline: none;
  padding: 5px;
  margin-bottom: 17px;
`;

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {error} = useSelector(state => state.user);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // From Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if(username.trim() === ""){
      return toast.error("لطفا نام کاربری را وارد کنید")
    }
    if(password.trim() === ""){
      return toast.error("لطفا  کلمه عبور را وارد کنید")
    }
    if(password.trim().length < 8){
      return toast.error("کلمه عبور باید بیشتر از 8 کاراکتر باشد")
    }
    
     dispatch(loginUser({username,password}));

    setUsername("");
    setPassword("");
    navigate("/");
  };
  return (
    <Container>
      <ToastContainer />
      <Title>ورود به حساب کاربری</Title>
      <Form onSubmit={formSubmitHandler}>
        <Input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          placeholder="نام کاربری"
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="کلمه عبور"
        />
        <Button type="submit">ورود </Button>
        {error && <span style={{color:"red"}}>اطلاعات ورود اشتباه بود</span>}
        <div style={{ textAlign: "start" }}>
          حساب کاربری ندارید؟{" "}
          <Link style={{ textDecoration: "none" }} to="/register">
            عضویت در سایت
          </Link>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
