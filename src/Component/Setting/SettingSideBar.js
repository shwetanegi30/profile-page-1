import React, { useState } from "react";
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
  const [activeItem, setActiveItem] = useState(1);

  return (
    <SettingbarContainer>
      <SettingbarContent>
        <Main>
          <Arrow />
          <span className="heading"> settings </span>
        </Main>
        {settingsData.map((setting) => (
          <SettingItem
            key={setting.id}
            onClick={() => {}} // todo: add when required
          >
            <IconWrapper>{setting.icon}</IconWrapper>
            <SettingName isSelected={activeItem === setting.id}>
              {setting.title}
            </SettingName>
          </SettingItem>
        ))}
      </SettingbarContent>
      <VerticalLine />
    </SettingbarContainer>
  );
}

export default SettingSideBar;
