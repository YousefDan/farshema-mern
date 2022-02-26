import styled from "styled-components";


const Container = styled.div`
  display: flex;
  margin: 21px 0;
`;
const Icon = styled.img`
    width: 60px;
`;
const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 10px;
`;
const Title = styled.span`
    color: #131921;
    font-size: 17px;
    font-weight: bold;
`;
const Desc = styled.span`
    color: #5f5c5c;
    font-size: 14px;
`;

const ShippingItem = ({item}) => {
    return ( <Container>
        <Icon src={item.img} />
        <InfoWrapper>
            <Title>{item.title}</Title>
            <Desc>{item.des}</Desc>
        </InfoWrapper>
    </Container> );
}
 
export default ShippingItem;