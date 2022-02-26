import { useState } from "react";
import styled from "styled-components";
import {md} from "../utils/responsive"

const Container = styled.div`
  width: 100%;
  ${md({width: "700px"})}
`;
const AccordionHeader = styled.div`
  background-color: ${props => props.toggle ? "#2980b9" : "#3498db"};
  padding: 17px 21px;
  border-bottom: 1px solid #2980b9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: white;
  &:hover {
      background-color: #2980b9;
  }
`;
const AccordionContent = styled.div`
  background-color: #efefef;
  line-height: 1.8;
  overflow: hidden;
  transition: height .7s ease;
`;
const Title = styled.h5`
  padding: 10px 21px;
`;
const Content = styled.p`
  padding: 10px 21px;
`;
const Icon = styled.div`
  height: 21px;
  width: 21px;
  border-top: 5px solid white;
  border-right: 5px solid white;
  transition: transform .7s ease;
  transform:${props => props.toggle ? "rotate(135deg)" : "rotate(-45deg)"};
`;

const Accordion = ({item}) => {
  const [toggle, setToggle] = useState(false);

  // Toggle Handler
  const toggleHandler = () => {
    setToggle(!toggle);
  };
  return (
    <Container>
      <AccordionHeader toggle={toggle} onClick={toggleHandler}>
        <h4>سوال {item}</h4>
        <Icon toggle={toggle}></Icon>
      </AccordionHeader>
      <AccordionContent style={{ height: toggle ? "120px" : "0" }}>
        <Title>پاسخ سوال {item}</Title>
        <Content>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه 
        </Content>
      </AccordionContent>
    </Container>
  );
};

export default Accordion;
