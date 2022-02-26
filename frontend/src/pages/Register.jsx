import styled from "styled-components";
import { Link } from "react-router-dom";
import { md } from "../utils/responsive";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerUser } from "../redux/userApiCall";

const Container = styled.div`
  min-height: 80vh;
  text-align: center;
  padding: 21px;
`;
const Title = styled.h1`
  color: #3a3939;
`;
const Form = styled.form`
  width: 100%;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  padding: 17px;
  margin: 21px auto;
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

const Register = () => {
  const dispatch = useDispatch();
  const {error} = useSelector(state => state.user);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // From Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (username.trim() === "") {
      return toast.error("لطفا نام کاربری را وارد کنید");
    }
    if (email.trim() === "") {
      return toast.error("لطفا ایمیل را وارد کنید");
    }
    if (password.trim() === "") {
      return toast.error("لطفا  کلمه عبور را وارد کنید");
    }
    if (password.trim().length < 8) {
      return toast.error("کلمه عبور باید بیشتر از 8 کاراکتر باشد");
    }
    if (password.trim() !== confirmPassword.trim()) {
      return toast.error("رمز عبور یکسان نیست");
    }

    dispatch(registerUser({ username, email, password }));


    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };
  return (
    <Container>
      <ToastContainer />
      <Title>عضویت در سایت</Title>
      <Form onSubmit={formSubmitHandler}>
        <Input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          placeholder="نام کاربری"
        />
        <Input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="ایمیل"
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="کلمه عبور"
        />
        <Input
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          type="password"
          placeholder="تکرار کلمه عبور"
        />
        <Button type="submit">ثبت نام </Button>
        {error && <span style={{color:"red"}}>این کاربر از قبل ثبت نام کرده است</span>}
        <div style={{ textAlign: "start" }}>
          حساب کاربری دارید؟{" "}
          <Link style={{ textDecoration: "none" }} to="/login">
            ورود به حساب کاربری
          </Link>
        </div>
      </Form>
    </Container>
  );
};

export default Register;
