import styled from "styled-components";
import { dummyShippingData } from "../../data/shippingDummy";
import ShippingItem from "./ShippingItem";

const Container = styled.div`
display: flex;
margin: 70px 0;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;
`;

const Shipping = () => {
  return (
    <Container>
      {dummyShippingData.map((item) => (
        <ShippingItem key={item._id} item={item} />
      ))}
    </Container>
  );
};

export default Shipping;
