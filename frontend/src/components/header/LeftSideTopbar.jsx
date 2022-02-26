import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { logoutUser } from "../../redux/userApiCall";
import { xsm } from "../../utils/responsive";
/* STYLES START */
const Left = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${xsm({ margin: "10px 0", justifyContent: "space-between" })}
`;
const LinkTo = styled.span`
  margin: 0 10px;
`;
const CartIcon = styled.img`
  width: 30px;
`;
const CartQuantity = styled.div`
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: absolute;
  top: -10px;
  right: -10px;
  font-size: 12px;
`;

const User = styled.div`
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
const UserName = styled.span`
  font-size: 17px;
`;
const LogoutBtn = styled.span`
  font-size: 12px;
  background-color: blue;
  color: #fff;
  padding: 5px;
  border-radius: 3px;
  position: absolute;
  top: 5px;
  left: 5px;
  cursor: pointer;
`;
/* STYLES END */

const LeftSideTopbar = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <Left>
      <div>
        {!currentUser ? (
          <>
            <LinkTo>
              <Link className="topbar-link" to="/login">
                ورود
              </Link>
            </LinkTo>
            <LinkTo>
              <Link className="topbar-link" to="/register">
                عضویت
              </Link>
            </LinkTo>
          </>
        ) : (
          <>
          <User>
            <UserAvatar src="/images/user-avatar.png" />
            <UserName>{currentUser?.username}</UserName>
          </User>
          <LogoutBtn onClick={() => dispatch(logoutUser())} >خروج</LogoutBtn>
          </>
        )}
      </div>
      <Link style={{ position: "relative" }} to="/cart">
        <CartIcon src="/icons/cart-plus-solid.svg" alt="" />
        <CartQuantity>{cart.length}</CartQuantity>
      </Link>
    </Left>
  );
};

export default LeftSideTopbar;
