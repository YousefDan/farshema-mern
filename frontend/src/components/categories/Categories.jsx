import styled from "styled-components";
import { categoryDummyData } from "../../data/categoryDummyData";
import CategoryItem from "./CategoryItem";
import CategoryTitle from "./CategoryTitle";
import { lg } from "../../utils/responsive";

const Container = styled.div`
  padding: 0 17px;
  margin: 70px 0;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  ${lg({ flexDirection: "row" })}
`;

const Categories = () => {
  return (
    <Container>
      <CategoryTitle />
      <Wrapper>
        {categoryDummyData.map((c) => (
          <CategoryItem item={c} key={c._id} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Categories;
