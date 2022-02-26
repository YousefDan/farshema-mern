import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 0 17px;
`;
const Title = styled.h2`
  margin-bottom: 10px;
`;
const Contact = styled.div`
  direction: ltr;
`;
const InfoItem = styled.div`
  margin-bottom: 11px;
  font-size: 21px;
  color: #6b6969;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 30px;
`;
const SocialMedia = styled.div`
  display: flex;
  direction: ltr;
  margin-top: 31px;
`;
const IconWrapper = styled.div`
  margin-right: 10px;
  width: 54px;
  height: 54px;
  background-color: ${(props) => props.bg};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ContactUs = () => {
  return (
    <Container>
      <Title>اطلاعات تماس</Title>
      <Contact>
        <InfoItem>
          <Icon src="/icons/phone-solid.svg" alt="" />
          <span style={{ marginLeft: "9px" }}>09133333333</span>
        </InfoItem>
        <InfoItem>
          <Icon src="/icons/envelope-regular.svg" alt="" />
          <span style={{ marginLeft: "9px" }}>info@farshema.com</span>
        </InfoItem>
      </Contact>
      <SocialMedia>
        <IconWrapper bg="#d64130">
          <Icon src="/icons/instagram-square-brands.svg" alt="" />
        </IconWrapper>
        <IconWrapper bg="#116ba7">
          <Icon src="/icons/facebook-square-brands.svg" alt="" />
        </IconWrapper>
        <IconWrapper bg="#21bb61">
          <Icon src="/icons/whatsapp-square-brands.svg" alt="" />
        </IconWrapper>
        <IconWrapper bg="#0a81d1">
          <Icon src="/icons/telegram-brands.svg" alt="" />
        </IconWrapper>
      </SocialMedia>
    </Container>
  );
};

export default ContactUs;
