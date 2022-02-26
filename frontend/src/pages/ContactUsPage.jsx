import styled from "styled-components";
import { md, sm, lg } from "../utils/responsive";

const Container = styled.div`
  min-height: 80vh;
  overflow: hidden;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Form = styled.form`
  width: 100%;
  border: 1px solid gray;
  border-radius: 7px;
  padding: 5px;
  background-color: #d8d2d2;
  ${sm({ width: "80%" })}
  ${md({ width: "70%" })}
  ${lg({ width: "50%"})}
`;
const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;
const Input = styled.input`
  padding: 5px 10px;
  border: none;
  font-size: 17px;
  &:focus {
    outline: none;
    box-shadow: 0 0 2px 2px skyblue;
  }
`;
const Label = styled.label`
  margin-bottom: 3px;
`;
const TextArea = styled.textarea`
  height: 100px;
  padding: 5px 10px;
  font-size: 17px;
  border: none;
  &:focus {
    outline: none;
    box-shadow: 0 0 2px 2px skyblue;
  }
`;
const Button = styled.button`
  background-color: green;
  color: white;
  border-radius: 7px;
  border: none;
  cursor: pointer;
  width: 110px;
  padding: 5px 10px;
  font-size: 21px;
`;

const ContactUsPage = () => {
  return (
    <Container>
      <Form>
        <InputGroup>
          <Label htmlFor="fullName">نام و نام خانوادگی</Label>
          <Input id="fullName" type="text" />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="email"> ایمیل یا شماره همراه </Label>
          <Input id="email" type="text" />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="subject"> موضوع</Label>
          <Input id="subject" type="text" />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="message">پیام شما</Label>
          <TextArea id="message" />
        </InputGroup>
        <Button type="submit">ارسال</Button>
      </Form>
    </Container>
  );
};

export default ContactUsPage;
