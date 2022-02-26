import styled from "styled-components";


/* STYLES START */
const Right = styled.div`
  flex: 2;
  height: 70px;
`;
const Logo = styled.h1`
  font-family: yekan;
  font-style: italic;
`;
/* STYLES END */

const RightSideTopbar = () => {
  return (
    <Right>
      <Logo>فرش ما</Logo>
    </Right>
  );
};

export default RightSideTopbar;
