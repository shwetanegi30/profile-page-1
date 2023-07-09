import styled from "styled-components";

export const Headerbar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  img {
    width: 31px;
    height: 31px;
    border-radius: 50%;
    object-fit: cover;
  }
  svg {
    margin-right: 18px;
    background-color: #e4e3e3;
    border-radius: 50%;
  }
`;
export const HeaderBox = styled.div`
  width: 92px;
  height: 43px;
  margin-top: 15px;
  margin-right: 16px;
`;
