import React from 'react'
import styled from 'styled-components';
import {
  RiNotification2Line
} from "react-icons/ri";

const Headerbar = styled.div`
  width:100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
  padding: 15px 20px 0 20px;

  img {
      width:  33px;
    height: 33px;
    border-radius: 50%;
    object-fit: cover;
    }
  
  svg{
    font-size: 32px;
    background-color: #f0f0f0;
    border-radius: 50%;
    padding: 5px;
    padding-right: 6px;
    margin-right: 20px;
  }
`;


function Header() {
  return (
    <Headerbar>
      <RiNotification2Line />
      <img src="https://media.licdn.com/dms/image/C5603AQEWw0FH_H6RCw/profile-displayphoto-shrink_800_800/0/1517580260726?e=2147483647&v=beta&t=aNMOb_GobO695V_7He-GNXay-K6apDPjEuWWg3sJSIg" alt="logo" />
    </Headerbar>
  )
}

export default Header
