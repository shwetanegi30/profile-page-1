import React from "react";
import {
  SettingbarContainer,
  SettingbarContent,
  Main,
  SettingItem,
  SettingName,
  IconWrapper,
  VerticalLine,
} from "./SettingStyles";
import settingsData from "./settingbar";
import { Arrow } from "../SvgIcons/svg";

function SettingSideBar() {
  return (
    <SettingbarContainer>
      <SettingbarContent>
        <Main>
          <Arrow />
          <span className="heading"> settings </span>
        </Main>
        {settingsData.map((setting) => (
          <SettingItem key={setting.id}>
            <IconWrapper>{setting.icon}</IconWrapper>
            <SettingName>{setting.title} </SettingName>
          </SettingItem>
        ))}
      </SettingbarContent>
      <VerticalLine />
    </SettingbarContainer>
  );
}

export default SettingSideBar;
