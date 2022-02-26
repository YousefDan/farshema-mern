import styled from "styled-components";

const Container = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  font-weight: 400;
  font-size: 40px;
  background-color: crimson;
  padding: 21px;
  width: max-content;
  color: white;
  border-radius: 10px;
`;

const NotFound = () => {
  return (
    <Container>
      <Wrapper>صفحه مورد نظر پیدا نشد</Wrapper>
    </Container>
  );
};

export default NotFound;
