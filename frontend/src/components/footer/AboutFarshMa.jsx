import styled from "styled-components";

const Container = styled.div`
  flex: 1;
`;
const Title = styled.h2`
  margin-bottom: 10px;
`;
const Description = styled.div`
  text-align: justify;
  padding: 10px;
  color: #6b6969;
`;

const AboutFarshMa = () => {
  return (
    <Container>
      <Title>درباره فرش ما</Title>
      <Description>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد .
      </Description>
    </Container>
  );
};

export default AboutFarshMa;
