import React from "react";
import { Headerbar, HeaderBox } from "./HeaderStyles";
import { BellIcon } from "../SvgIcons/svg";

function Header() {
  return (
    <Headerbar>
      <HeaderBox>
        <BellIcon />
        <img
          className="image"
          src="https://media.licdn.com/dms/image/C5603AQEWw0FH_H6RCw/profile-displayphoto-shrink_800_800/0/1517580260726?e=2147483647&v=beta&t=aNMOb_GobO695V_7He-GNXay-K6apDPjEuWWg3sJSIg"
          alt="logo"
        />
      </HeaderBox>
    </Headerbar>
  );
}

export default Header;
