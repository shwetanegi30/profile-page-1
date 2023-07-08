import React from 'react';
import styled from 'styled-components';
import settingsData from './settingbar';
import { FaAngleLeft  } from 'react-icons/fa';


const SettingbarContainer = styled.div`
display: flex;
  width: 200px;
  top: 0;
  right: 0;
`;


const SettingbarContent = styled.div`
  padding: 20px;

  .main{
    margin-bottom: 44px;
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
    margin-bottom:30px;  

    .settingname{
      color: #837d7d;
    font-weight: 300;
    font-size: 17px;
    margin-top: 11px;
    }
`;

const IconWrapper = styled.span`
  margin-right: 15px;

  svg{
      font-size: 22px;
      color: #837d7d;
    }
`;

const VerticalLine = styled.div`
  height: 100%;
  border: 1px solid #c2bbbbc4;
  margin-left: 30px
  
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
           <h4 className='settingname'>{setting.title} </h4> 
          </SettingItem>
        ))}
      </SettingbarContent>
      <VerticalLine />
    </SettingbarContainer>
  );
}

export default SettingSideBar;
