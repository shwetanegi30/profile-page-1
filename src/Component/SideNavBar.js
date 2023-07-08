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
    margin-bottom: 47px;
    margin-top: 10px;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        display: flex;
        align-items: center;
        padding-left: 5px;
    padding-bottom: 41px
      }

      svg {
        font-size: 27px;
        color: red;
      }

      .setting-icon {
        background-color: orange;
        border-radius: 50%;
        padding: 5px;
        margin-top: 175px;
    padding-right: 6px;
      }
    }
  }
`;

function SideNavBar() {
  return (
    <Sidebar>
      <div>
        <img src="https://cdn5.vectorstock.com/i/1000x1000/66/59/gold-pd-letter-logo-design-pd-logo-design-pd-logo-vector-37396659.jpg" alt="logo" />

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
