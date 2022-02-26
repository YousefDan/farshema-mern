import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { xsm, md, lg, sm } from "../../utils/responsive";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../../redux/productApiCall";
import { addToCart } from "../../redux/cartApiCall";


const Container = styled.div`
  min-height: 100vh;
  padding: 17px;
  padding-bottom: 100px;
  background-color: #efefef;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  ${lg({ flexDirection: "row" })}
`;
const ImageWrapper = styled.div`
  flex: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 480px;
`;
const Image = styled.img`
  width: 90%;
  height: 520px;
  cursor: zoom-in;
  transition: all 0.7s ease;
  &:hover {
    transform: scale(1);
    ${lg({ transform: "scale(1.4)" })}
  }
  ${sm({ height: "700px", width: "80%" })}
  ${md({ width: "72%" })}
  ${lg({ height: "340px", width: "66%" })}
`;
const DetailsWrapper = styled.div`
  flex: 7;
  margin-top: 40px;
`;
const Title = styled.h1``;
const ProductPrice = styled.div`
  font-size: 21px;
  margin: 21px 0;
  background-color: blue;
  color: white;
  padding: 7px;
  border-radius: 10px;
  width: max-content;
`;
const ListItems = styled.ul`
  margin: 10px 37px 0 0;
`;
const Item = styled.li`
  font-size: 17px;
  color: #353434;
  margin-bottom: 7px;
`;
const SizeWrapper = styled.div`
  margin: 21px 0;
  display: flex;
  align-items: center;
`;
const Select = styled.select`
  padding: 7px;
  font-size: 17px;
  margin-right: 10px;
`;
const Option = styled.option`
  font-size: 17px;
`;
const AddToCartWrapper = styled.div`
  display: flex;
  align-items: center;
  ${xsm({
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  })}
`;
const Input = styled.input`
  padding: 5px 10px;
  border: 1px solid skyblue;
  font-size: 21px;
  margin: 0 10px;
  &:focus {
    outline: none;
  }
  ${xsm({ margin: "12px 0" })}
`;
const Button = styled.button`
  color: white;
  background-color: green;
  padding: 10px;
  border: none;
  border-radius: 10px;
  margin: 0 10px;
  font-size: 21px;
  cursor: pointer;
`;
const Description = styled.p`
  padding: 17px;
  line-height: 2;
  background-color: #ffffff;
  margin: 10px 0;
  color: #131921;
  text-align: justify;
`;
const CommentTitle = styled.div`
  background-color: #0da70d;
  color: white;
  padding: 7px;
  border-radius: 10px;
  margin-top: 40px;
`;
const CommentDesc = styled.p`
  margin: 17px 0;
`;
const CommentForm = styled.form`
  border: 1px solid whitesmoke;
  padding: 15px;
  border-radius: 10px;
  background-color: snow;
  box-shadow: 0 0 2px 2px whitesmoke;
`;
const InputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${xsm({
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  })}
`;
const CommentInput = styled.input`
  width: 48%;
  padding: 5px 10px;
  font-size: 21px;
  border: 1px solid gray;
  border-radius: 7px;
  &:focus {
    outline: none;
    box-shadow: 0 0 2px 2px skyblue;
  }
  ${xsm({ width: "100%", margin: "10px 0" })}
`;
const CommentTextArea = styled.textarea`
  width: 100%;
  padding: 5px 10px;
  font-size: 21px;
  border: 1px solid gray;
  border-radius: 7px;
  min-height: 210px;
  margin: 17px 0;
  &:focus {
    outline: none;
    box-shadow: 0 0 2px 2px skyblue;
  }
`;
const SubmitComment = styled.button`
  color: white;
  background-color: blue;
  padding: 10px;
  border: none;
  border-radius: 10px;
  margin: 0 10px;
  width: 200px;
  text-align: center;
  font-size: 21px;
  cursor: pointer;
  &:hover {
    background-color: darkblue;
  }
`;

const SingleProduct = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);

  useEffect(() => {
    dispatch(fetchSingleProduct(params.id));
    window.scrollTo(0, 0);
  }, [dispatch, params]);

  const [size, setSize] = useState(12);
  const [qty, setQty] = useState(1);

  // handle add to cart
  const addToCartHandler = (product) => {
    dispatch(addToCart(product))
  };

  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <Image src={product.img} alt={product.title} />
        </ImageWrapper>
        <DetailsWrapper>
          <Title>{product.title}</Title>
          <ProductPrice>{product.price} تومان</ProductPrice>
          <h3>ویژگی های محصول</h3>
          <ListItems>
            <Item>500 شانه</Item>
            <Item>تراکم 2000</Item>
            <Item>100% آکرلیک</Item>
            <Item>ضمانت 5 ساله معتبر</Item>
          </ListItems>
          <SizeWrapper>
            <h3 style={{ color: "#353434" }}>انتخاب اندازه :</h3>
            <Select value={size} onChange={(e) => setSize(e.target.value)}>
              <Option value="12"> دوازده متری (3*4)</Option>
              <Option value="9"> نه متری (2/5 * 3/5)</Option>
              <Option value="6"> شش متری (3*2)</Option>
            </Select>
          </SizeWrapper>
          <AddToCartWrapper>
            <h3 style={{ color: "#353434" }}> تعداد :</h3>
            <Input
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              type="number"
              min="1"
            />
            <Button
              onClick={() =>
                addToCartHandler({
                  title: product.title,
                  price: product.price,
                  img: product.img,
                  size,
                  qty,
                  _id:product._id,
                })
              }
            >
              افزودن به سبد خرید
            </Button>
          </AddToCartWrapper>
        </DetailsWrapper>
      </Wrapper>
      <Title>توضیحات کلی</Title>
      <Description>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد . ورم ایپسوم متن ساختگی با
        تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
        برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
        ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
        آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت
        بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو
        در زبان فارسی ایجاد کرد .
      </Description>
      <CommentTitle>دیدگاه خود را در مورد این محصول ارسال نمایید</CommentTitle>
      <CommentDesc>
        برای نظر دادن ابتدا باید وارد حساب کاربری خود شوید. اگر این محصول را
        قبلا از این سایت خریده باشید نظر شما به عنوان خریدار محصول ثبت خواهد شد.
      </CommentDesc>
      <CommentForm>
        <InputGroup>
          <CommentInput type="text" placeholder="نام و نام خانوادگی..." />
          <CommentInput
            type="text"
            placeholder="شماره تلفن همراه یا ایمیل..."
          />
        </InputGroup>
        <CommentTextArea placeholder="دیدگاه شما..." />
        <SubmitComment>ارسال دیدگاه</SubmitComment>
      </CommentForm>
    </Container>
  );
};

export default SingleProduct;
