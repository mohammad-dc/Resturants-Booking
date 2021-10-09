import styled from "styled-components";
import * as Colors from "../../common/colors";

export const Root = styled.div`
  height: 100vh;
  background: linear-gradient(
    ${Colors.LIGHT_GREY_COLOR},
    ${Colors.WHITE_COLOR}
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexCenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Montserrat-Regular";
  color: ${Colors.BLACK_COLOR};
`;
