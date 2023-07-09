import styled from "styled-components";

export const SettingbarContainer = styled.div`
  display: flex;
  top: 0;
  right: 0;
`;

export const SettingbarContent = styled.div`
  padding: 16px;

  .heading {
    font-weight: 700;
    font-size: 20px;
  }
`;
export const Main = styled.div`
  margin-bottom: 33px;
`;

export const SettingItem = styled.div`
  display: flex;
  align-items: center;
  margin-left: 24px;
  margin-bottom: 40px;
`;
export const SettingName = styled.h4`
  color: ${(props) => (props.isSelected ? "#000" : "#858585")};
  font-weight: 500;
  font-size: 18px;
  margin-top: 11px;
`;

export const IconWrapper = styled.span`
  margin-right: 7px;

  svg {
    font-size: 22px;
    color: #858585;
  }
`;

export const VerticalLine = styled.div`
  height: 100%;
  border: 1px solid #858585;
  margin-left: 30px;
  opacity: 0.5;
`;
