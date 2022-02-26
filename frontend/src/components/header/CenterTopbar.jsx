import styled from "styled-components";
import { xsm, sm } from "../../utils/responsive";

/* STYLES START */
const Center = styled.div`
  flex: 7;
  height: 50px;
  position: relative;
`;
const CategoriesWrapper = styled.div`
  height: 50px;
  width: 100%;
`;
const SearchInput = styled.input`
  width: 100%;
  padding: 5px 10px;
  border-radius: 7px;
  font-size: 17px;
  border: none;
  height: 100%;
  &:focus {
    outline: 1px solid skyblue;
  }
  ${sm({ width: "80%", borderRadius: "7px 0 0 7px" })}
`;
const SearchButton = styled.button`
  height: 50px;
  width: 60px;
  left: 0;
  top: 0;
  position: absolute;
  font-size: 17px;
  border: none;
  background-color: #0ab90a;
  padding: 5px 10px;
  cursor: pointer;
  color: white;
  border-radius: 7px 0 0 7px;
  &:active {
    outline: 1px solid skyblue;
  }
`;

const CategoriesIcon = styled.img`
  width: 10px;
`;
const CategoriesList = styled.ul`
  position: absolute;
  bottom: -182px;
  min-height: 100px;
  border: 1px solid white;
  width: 40%;
  list-style: none;
  background-color: #efefef;
  border-radius: 7px;
  display: none;
  z-index: 11;
`;
const Category = styled.li`
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  padding: 10px;
  &:hover {
    background-color: #eee6e6;
  }
  &:first-child {
    border-radius: 7px 7px 0 0;
  }
  &:last-child {
    border-radius: 0 0 7px 7px;
  }
`;
const Button = styled.button`
  height: 50px;
  width: 20%;
  font-size: 17px;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  color: gray;
  border-radius: 0 7px 7px 0;
  &:active {
    outline: 1px solid skyblue;
  }
  &:focus ~ ${CategoriesList} {
    display: block;
  }
  ${xsm({ display: "none" })}
`;
/* STYLES END */

const CetnerTopbar = () => {
  return (
    <Center>
      <CategoriesWrapper>
        <Button>
          دسته بندی <CategoriesIcon src="/icons/sort-down-solid.svg" />
        </Button>
        <SearchInput type="search" placeholder="جستجوی محصول مورد نظر..." />
        <SearchButton type="submit">بگرد</SearchButton>
        <CategoriesList>
          <Category>فرش ماشینی</Category>
          <Category>فرش فانتزی</Category>
          <Category>تابلو فرش</Category>
          <Category>پادری </Category>
        </CategoriesList>
      </CategoriesWrapper>
    </Center>
  );
};

export default CetnerTopbar;
