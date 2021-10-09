import React from "react";
import Logo from "../../assets/images/logo.png";
import { Root, FlexCenterWrapper } from "./style";

const Loading = () => {
  return (
    <Root>
      <FlexCenterWrapper>
        <div>
          <img src={Logo} alt="Booking" />
        </div>
        <div>
          <p>Loading...</p>
        </div>
      </FlexCenterWrapper>
    </Root>
  );
};

export default Loading;
