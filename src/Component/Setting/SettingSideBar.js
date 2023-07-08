import React from 'react';
import styled from 'styled-components';
import settingsData from './settingbar';
import { FaAngleLeft  } from 'react-icons/fa';


const SettingbarContainer = styled.div`
  width: 200px;
  top: 0;
  right: 0;
`;


const SettingbarContent = styled.div`
  padding: 20px;

  .main{
    margin-bottom: 51px;
    padding-top: 11px;
  }

  .heading{
  font-weight: 700;
    padding-left: 15px;
    font-size: 18px;
    padding-top:10px
}
`;

const SettingItem = styled.div`
  display: flex;
  align-items: center;
    margin-left: 20px;
    font-size: 18px;
    margin-bottom:46px;  
`;

const IconWrapper = styled.span`
  margin-right: 15px;

  svg{
      font-size: 20px;
    }
`;

function SettingSideBar() {
  return (
    <SettingbarContainer>
      <SettingbarContent>
      <div className='main'>
      <FaAngleLeft  />
        <span className='heading'> settings </span>
      </div>
        {settingsData.map((setting) => (
          <SettingItem key={setting.id}>
            <IconWrapper>
              {setting.icon}
            </IconWrapper>
            {setting.title}
          </SettingItem>
        ))}
      </SettingbarContent>
    </SettingbarContainer>
  );
}

export default SettingSideBar;
