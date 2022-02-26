import styled from "styled-components";
import { lg} from "../../utils/responsive";
import CetnerTopbar from "./CenterTopbar";
import LeftSideTopbar from "./LeftSideTopbar";
import RightSideTopbar from "./RightSideTopbar";

/* STYLES START */

const Container = styled.div`
  width: 100%;
  height: 170px;
  background-color: #131921;
  color: white;
  padding: 7px;
  display: flex;
  flex-direction: column;
  ${lg({
    flexDirection: "row",
    height: "70px",
    padding: "10px 17px",
    alignItems: "center",
  })}
`;
/* STYLES END */

const Topbar = () => {
  return (
    <Container>
      <RightSideTopbar />
      <CetnerTopbar />
      <LeftSideTopbar />
    </Container>
  );
};

export default Topbar;
