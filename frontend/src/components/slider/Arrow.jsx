import styled from "styled-components";

/* STYLES START */
const ArrowWrapper = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: ${(props) => props.direction === "right" && "10px"};
  left: ${(props) => props.direction === "left" && "10px"};
  cursor: pointer;
  background-color: white;
  opacity: 0.7;
  border-radius: 50%;
  text-align: center;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  display: ${(props) => props.sliderIndexRight === 0 && "none"};
  display: ${(props) => props.sliderIndexLeft === 2 && "none"};
`;
const ArrowIcon = styled.img`
  width: 50%;
`;
/* STYLES END */

const Arrow = ({
  sliderIndexLeft,
  sliderIndexRight,
  direction,
  handleClick,
  src,
}) => {
  return (
    <ArrowWrapper
      sliderIndexRight={sliderIndexRight}
      sliderIndexLeft={sliderIndexLeft}
      onClick={handleClick}
      direction={direction}
    >
      <ArrowIcon src={src} alt="chevron icon" />
    </ArrowWrapper>
  );
};

export default Arrow;
