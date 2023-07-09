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
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (id) => {
    setActiveItem(id);
  };

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
            onClick={() => handleItemClick(setting.id)}
          >
            <IconWrapper>{setting.icon}</IconWrapper>
            <SettingName
              style={{
                color: activeItem === setting.id ? "black" : "null",
              }}
            >
              {setting.title}{" "}
            </SettingName>
          </SettingItem>
        ))}
      </SettingbarContent>
      <VerticalLine />
    </SettingbarContainer>
  );
}

export default SettingSideBar;
