import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { dummyData } from "../../data/sliderDummyData";
import { md, lg } from "../../utils/responsive";
import Arrow from "./Arrow";

/* STYLES START */
const Container = styled.div`
  width: 100%;
  height: 82vh;
  position: relative;
  overflow-x: hidden;
  display: none;
  ${md({ display: "block" })}
`;
const Wrraper = styled.div`
  width: 100%;
  display: flex;
  transform: translateX(${(props) => props.sliderIndex * 100}vw);
  transition: transform 1s ease;
`;
const Slide = styled.div`
  height: 82vh;
  width: 100vw;
  display: flex;
  align-items: center;
  background: ${(props) => props.bg};
`;

const InfoContainer = styled.div`
  height: 100%;
  width: 30vw;
  flex: 4;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  padding: 21px;
`;
const Title = styled.h1`
  font-size: 21px;
  color: #131921;
  text-align: center;
  ${lg({ fontSize: "28px" })}
`;
const Description = styled.p`
  margin: 21px 0;
  padding: 7px;
  font-size: 15px;
  color: gray;
  text-align: justify;
  ${lg({ fontSize: "19px" })}
`;
const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 11px;
  border: 1px solid skyblue;
  background-color: blue;
  ${lg({ fontSize: "21px" })}
  color: white;
  font-size: 17px;
  transition: background-color 0.4s ease;
  &:hover {
    background-color: darkblue;
  }
`;
const ImgContainer = styled.div`
  height: 100%;
  width: 70vw;
  flex: 8;
  padding: 17px;
  text-align: center;
`;
const Image = styled.img`
  height: 100%;
  width: 65vw;
`;
/* STYLES END */

const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  // Handle Click On The Arrow
  const handleClick = (direction) => {
    if (direction === "left") {
      setSliderIndex(sliderIndex + 1);
    } else {
      setSliderIndex(sliderIndex - 1);
    }
  };

  return (
    <Container>
      <Arrow
        src="/icons/chevron-left-solid.svg"
        direction="left"
        handleClick={() => handleClick("left")}
        sliderIndexLeft={sliderIndex}
      />
      <Wrraper sliderIndex={sliderIndex}>
        {dummyData.map((slide) => (
          <Slide bg={slide.bg} key={slide._id}>
            <InfoContainer>
              <Title>{slide.title}</Title>
              <Description>{slide.description}</Description>
              <Button>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/products"
                >
                  به صفحه محصولات برو
                </Link>
              </Button>
            </InfoContainer>
            <ImgContainer>
              <Image src={slide.img} alt="" />
            </ImgContainer>
          </Slide>
        ))}
      </Wrraper>
      <Arrow
        src="/icons/chevron-right-solid.svg"
        direction="right"
        handleClick={() => handleClick("right")}
        sliderIndexRight={sliderIndex}
      />
    </Container>
  );
};

export default Slider;
