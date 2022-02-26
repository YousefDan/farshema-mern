import styled from "styled-components";
import { sm, lg } from "../../utils/responsive";

const Container = styled.div`
  position: relative;
  margin: 12px;
  width: 340px;
  height: 450px;
  border: 2px solid gray;
  background-color: #efefef;
  box-shadow: 0 0 5px 2px grey;
  border-radius: 10px;
  padding: 5px;
  text-align: center;
  ${lg({ margin: "0" })}
  ${sm({ width: "400px" })}
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
const Layout = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  right: 0px;
  z-index: 2;
  padding: 7px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;
const Title = styled.span`
  color: white;
  font-size: 29px;
  background-color: blue;
  border-radius: 7px;
  padding: 0 5px;
  display: block;
  width: 100%;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} alt={item.title} />
      <Layout>
        <Title>{item.title}</Title>
      </Layout>
    </Container>
  );
};

export default CategoryItem;
