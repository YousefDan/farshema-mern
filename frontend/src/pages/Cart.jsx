import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { cartActions } from "../redux/carrSlice";
import { sm, lg } from "../utils/responsive";

const Container = styled.div`
  min-height: 70vh;
  padding: 10px;
  ${lg({ padding: "21px" })}
`;
const Title = styled.h1`
  text-align: center;
  font-size: 32px;
  border-bottom: 4px solid green;
  width: max-content;
  color: #686262;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  ${lg({ flexDirection: "row" })}
`;
const CartItems = styled.div`
  flex: 8;
  margin: 21px 0;
`;
const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid gray;
  padding: 10px;
`;
const ProductInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  ${sm({ flexDirection: "row" })}
`;
const ProductInfo = styled.div`
  margin: 0 17px;
`;
const Image = styled.img`
  width: 120px;
  height: 170px;
  margin-bottom: 10px;
`;
const ProductQuantity = styled.div`
  font-size: 14px;
  ${sm({ fontSize: "17px" })}
`;

const OrderSummary = styled.div`
  flex: 4;
  padding: 15px;
  border: 1px solid gray;
  margin: 7px;
  border-radius: 7px;
  background-color: #efefef;
`;
const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;
const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 31px 0;
`;
const Button = styled.button`
  cursor: pointer;
  background-color: green;
  color: white;
  border-radius: 7px;
  border: none;
  width: 100%;
  padding: 5px 10px;
  font-size: 27px;
`;
const DeleteFromCart = styled.div`
  color: red;
  font-size: 10px;
  cursor: pointer;
  font-weight: bold;
`;

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cart);

  return (
    <Container>
      <Title>سبد خرید شما</Title>
      <Wrapper>
        <CartItems>
          {cartItems.map((item) => (
            <CartItem key={item._id}>
              <ProductInfoWrapper>
                <Image src={item.img} alt={item.title} />
                <ProductInfo>
                  <h4>{item.title}</h4>
                  <div style={{ margin: "12px 0" }}>
                    اندازه فرش: {item.size} متر مربع{" "}
                  </div>
                  <div>قیمت هر تخته {item.price}</div>
                </ProductInfo>
              </ProductInfoWrapper>
              <ProductQuantity>تعداد: {item.qty}</ProductQuantity>
              <DeleteFromCart
                onClick={() => dispatch(cartActions.removeFromCart(item._id))}
              >
                حذف از سبد خرید
              </DeleteFromCart>
            </CartItem>
          ))}
        </CartItems>
        <OrderSummary>
          <h2>سفارش شما</h2>
          <List>
            <ListItem>
              <span>تعداد کل سفارش :</span>
              <span>
                {cartItems.reduce((acc, curr) => acc + +curr.qty, 0)} تخته فرش
              </span>
            </ListItem>
            <ListItem>
              <span> هزینه ارسال :</span>
              <span>رایگان</span>
            </ListItem>
            <ListItem>
              <span> تخفیف :</span>
              <span>0 تومان</span>
            </ListItem>
            <ListItem>
              <h4> مبلغ قابل پرداخت :</h4>
              <h4>
                {cartItems.reduce(
                  (acc, curr) => acc + +curr.qty * +curr.price,
                  0
                )}{" "}
                تومان
              </h4>
            </ListItem>
          </List>
          <Button>پرداخت</Button>
        </OrderSummary>
      </Wrapper>
    </Container>
  );
};

export default Cart;
