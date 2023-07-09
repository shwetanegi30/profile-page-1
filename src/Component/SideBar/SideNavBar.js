import React from "react";
import { Sidebar, Icon } from "./SidebarStyles";
import IconData from "./Sidebar";

function SideNavBar() {
  return (
    <Sidebar>
      {IconData.map((item) => (
        <Icon key={item.id}>{item.icon}</Icon>
      ))}
    </Sidebar>
  );
}

export default SideNavBar;
