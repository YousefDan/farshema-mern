import styled from "styled-components";
import Accordion from "./Accordion";

const Container = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 10px;
  margin-bottom: 110px;
`;
const Wrapper = styled.div`
  margin-top: 21px;
  border-radius: 7px 7px 0 0;
  overflow: hidden;
`;

const CommonQuestions = () => {
  return (
    <Container>
      <Wrapper>
        {[1, 2, 3, 4, 5].map((item) => (
          <Accordion key={item} item={item} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default CommonQuestions;
