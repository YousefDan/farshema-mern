import styled from "styled-components";
import { lg } from "../../utils/responsive";
import AboutFarshMa from "./AboutFarshMa";
import ContactUs from "./ContactUs";
import UsefullLinks from "./UserfullLinks";

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 17px;
  background-color: #faf8f8;
  color: #131921;
  ${lg({ flexDirection: "row" })};
`;

const Footer = () => {
  return (
    <>
      <Container>
        <AboutFarshMa />
        <UsefullLinks />
        <ContactUs />
      </Container>
      <div
        style={{
          textAlign: "center",
          fontSize: "21px",
          padding: "10px",
          color: "white",
          backgroundColor: "#131921",
        }}
      >
        Copyright &copy; 2022
      </div>
    </>
  );
};

export default Footer;
