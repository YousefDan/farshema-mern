import styled from "styled-components";
import ProductItem from "./ProductItem";


const Container = styled.div`
  padding: 0 17px;
  margin: 40px 0;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  background-color: #EFEFEF;
`;
const Title = styled.div`
  border-bottom: 2px solid blue;
  padding: 7px 17px;
  margin-bottom: 21px;
  font-size: 27px;
  color: #131921;
`;

const Products = ({title,products}) => {
  return (
    <Container>
      {title && <Title> {title} </Title>}
      <Wrapper>
        {products.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Products;
