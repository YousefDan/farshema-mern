import { Link } from "react-router-dom";
import styled from "styled-components";
import { lg, xl } from "../../utils/responsive";

const Container = styled.div`
  width: 320px;
  height: 530px;
  margin: 17px;
  border: 1px solid gray;
  padding: 10px;
  background-color: #fffafa;
  box-shadow: 0 0 2px 2px gray;
  ${lg({ width: "25%", height: "410px" })}
  ${xl({ width: "25%", margin: "17px", height: "500px" })}
`;
const Image = styled.img`
  width: 100%;
  height: 400px;
  ${lg({ height: "270px" })}
  ${xl({ height: "365px" })}
`;
const Title = styled.h5`
  margin: 7px 0;
  color: 131921;
`;
const Price = styled.span`
  color: #424141;
`;
const MoreDatails = styled.div`
  background-color: orange;
  text-align: center;
  cursor: pointer;
  font-size: 18px;
  margin-top: 7px;
`;

const ProductItem = ({ product }) => {
  const { img, title, price, _id } = product;
  return (
    <Container>
      <Image src={img} alt={title} />
      <Title>{title}</Title>
      <Price>{price} تومان</Price>
      <MoreDatails>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={`/products/${_id}`}
        >
          جزییات بیشتر
        </Link>
      </MoreDatails>
    </Container>
  );
};

export default ProductItem;
