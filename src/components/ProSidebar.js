import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  FaHome,
  FaUser,
  FaUserGraduate,
  FaTools,
  FaSkiing,
  FaEnvelope,
} from "react-icons/fa";

function ProSidebar() {
  return (
    <div>
      <Sidebar>
        <Menu>
          <MenuItem icon={<FaHome />}>Home</MenuItem>
          <SubMenu label="AboutMe" icon={<FaUser />}>
            <MenuItem icon={<FaUserGraduate />}>Education</MenuItem>
            <MenuItem icon={<FaTools />}>Skill</MenuItem>
            <MenuItem icon={<FaSkiing />}>Experience </MenuItem>
          </SubMenu>
          <MenuItem icon={<FaEnvelope />}> Contact Me </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default ProSidebar;
