import React from "react";
import styled from "styled-components";
import {
  RiHome2Line,
  RiNotification2Line,
  RiUserLine,
  RiSettings2Line,
} from "react-icons/ri";
import { IoTrendingUp } from "react-icons/io5";

const Sidebar = styled.div`
  background-color: #0808ff9c;

  div {
    padding: 15px;
    padding-bottom:0;

    img {
      width:  40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 45px;
    margin-top: 10px;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        display: flex;
        align-items: center;
        margin-bottom: 40px;
      }

      svg {
        font-size: 30px;
        color: red;
      }

      .setting-icon {
        background-color: orange;
        border-radius: 50%;
        padding: 5px;
        margin-top: 200px;
    padding-right: 6px;
      }
    }
  }
`;

function SideNavBar() {
  return (
    <Sidebar>
      <div>
        <img src="https://media.licdn.com/dms/image/C5603AQEWw0FH_H6RCw/profile-displayphoto-shrink_800_800/0/1517580260726?e=2147483647&v=beta&t=aNMOb_GobO695V_7He-GNXay-K6apDPjEuWWg3sJSIg" alt="logo" />

        <ul>
          <li>
            <RiHome2Line />
          </li>
          <li>
            <RiNotification2Line />
          </li>
          <li>
            
          </li>
          <li>
            <IoTrendingUp />
          </li>
          <li>
            <RiUserLine/>
          </li>
        </ul>

        <ul>
          <li>
            <div className="setting-icon">
              <RiSettings2Line size={30} color="white" />
            </div>
          </li>
        </ul>
      </div>
    </Sidebar>
  );
}

export default SideNavBar;
