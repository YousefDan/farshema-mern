import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin-right: 17px;
`;
const Title = styled.h2`
  margin-bottom: 10px;
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  color: #6b6969;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 17px;
  transition: all 1s ease;
  &:hover {
    padding-right: 7px;
    color: blue;
  }
`;

const UsefullLinks = () => {
  return (
    <Container>
      <Title>لینک های مفید</Title>
      <List>
        <ListItem>خانه</ListItem>
        <ListItem>حساب کاربری</ListItem>
        <ListItem>محصولات</ListItem>
        <ListItem>نحوه ارسال</ListItem>
        <ListItem>نقد و بررسی</ListItem>
        <ListItem>تخفیف</ListItem>
        <ListItem>راهنمای خرید</ListItem>
        <ListItem>سوالات متداول</ListItem>
      </List>
    </Container>
  );
};

export default UsefullLinks;
