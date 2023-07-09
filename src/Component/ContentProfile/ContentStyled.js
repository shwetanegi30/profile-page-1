import styled from "styled-components";

export const Content = styled.div`
  flex: 1;
  padding: 0 12%;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProfileImage = styled.img`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ProfileName = styled.h2`
  margin: 0;
  font-size: 27px;
  font-weight: 600;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 100%;
  .form {
    height: 63px;
    width: 1091px;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: #1c1c1c;
  padding-bottom: 2px;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 4px;
  padding: 6px 30px 6px 20px;
  border: 2px solid #858585;
  opacity: 0.6;

  .input {
    width: 100px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  padding-top: 22px;

  .cancel {
    color: #08b5ff;
    background-color: white;
    border: 2px solid #08b5ff;
    padding: 4px 20px;
  }

  .save {
    border: none;
    background-color: #086bff;
    color: white;
    padding: 4px 27px;
  }
`;

export const Button = styled.button`
  margin-right: 24px;
  border-radius: 3px;
`;

export const InputField = styled.div`
  position: relative;
  svg {
    position: absolute;
    right: 10px;
    top: calc(50% - 12px);
  }
`;


export const Calender = styled(InputField)``;
