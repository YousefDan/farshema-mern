import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


/* STYLES START */
const Container = styled.nav`
  background-color: #2c3e50;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 17px;
`;
const NavLinksWrraper = styled.div``;
const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  z-index: 3;

  @media only screen and (max-width: 670px) {
    position: absolute;
    right: ${(props) => (props.toggle ? "0" : "-210px")};
    height: 60vh;
    background-color: #2c3e50;
    min-height: 70vh;
    width: 210px;
    flex-direction: column;
    justify-content: space-around;
    transition: all 1s ease;
  }
`;
const LinkItem = styled.li`
  margin: 0 10px;
  padding: 3px 7px;
  cursor: pointer;
`;

const PhoneWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const PhoneIcon = styled.img`
  width: 25px;
  margin-right: 10px;
`;

// Burger Icon Only visible in screen 670px and down
const BurgerIcon = styled.div`
  cursor: pointer;
  display: none;
  @media only screen and (max-width: 670px) {
    display: block;
    z-index: 10;
  }
`;
const Burger = styled.div`
  width: 30px;
  height: 3px;
  display: ${(props) => (props.toggle ? "none" : "block")};
  transform: ${(props) =>
    props.line1
      ? "rotate(-45deg) translate(-4px,3px)"
      : props.line2
      ? "rotate(45deg) translate(-4px,-3px)"
      : "rotate(0)"};
  background-color: white;
  margin: 7px;
  border-radius: 7px;
  cursor: pointer;
  transition: transform 0.4s ease;
`;

/* STYLES END */

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
   
  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };
  return (
    <Container>
      <BurgerIcon onClick={toggleHandler}>
        <Burger line1={toggle} />
        <Burger toggle={toggle} />
        <Burger line2={toggle} />
      </BurgerIcon>
      <NavLinksWrraper onClick={() => setToggle(false)}>
        <NavLinks toggle={toggle}>
          <LinkItem>
          <Link className="nav-link" to="/">خانه</Link>
          </LinkItem>
          <LinkItem>  
            <Link className="nav-link" to="/products">محصولات</Link>
          </LinkItem>
          <LinkItem>
          <Link className="nav-link" to="/contact-us">تماس با ما</Link>
          </LinkItem>
          <LinkItem>
          <Link className="nav-link" to="/common-questions">سوالات متداول</Link>
          </LinkItem>
        </NavLinks>
      </NavLinksWrraper>
      <PhoneWrapper>
        <span>09133333333</span>
        <PhoneIcon src="/icons/phone-solid.svg" alt="phone icon" />
      </PhoneWrapper>
    </Container>
  );
};

export default Navbar;
