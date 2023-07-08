import React from 'react';
import styled from 'styled-components';
import fields from './contentList';

const Content = styled.div`
  flex: 1;
  padding-left:110px;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap:57%;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
    object-fit: cover;
`;

const ProfileName = styled.h2`
  margin: 0;
  font-size: 25px
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 35px
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 38%;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  ${'' /* padding-right: 412px */}
`;

const Label = styled.label`
  ${'' /* width: 120px; */}
  font-size: 15px;
    font-weight: 500;
    padding-bottom: 2px;
`;

const Input = styled.input`
  width: 73%;
  border-radius: 4px;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 19px;
    border: 1px solid #5f5959;

  .input{
   
    width: 100px
  }
  .input-width{
    ${'' /* width:75.5%; */}
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  padding-top: 22px;

  .cancel{
  color: blue;
    background-color: white;
    border: 1px solid blue;
    padding:4px 20px;
}

.save{
  border: none;
    background-color: blue;
    color: white;
    padding:4px 27px;
}
`;

const Button = styled.button`
  margin-right: 20px;
    border-radius: 4px;
`;


function Contentbox() {
  return (
    <Content>
      <ProfileContainer>
        <ProfileName>Edit Profile</ProfileName>
        <ProfileImage src="https://media.licdn.com/dms/image/C5603AQEWw0FH_H6RCw/profile-displayphoto-shrink_800_800/0/1517580260726?e=2147483647&v=beta&t=aNMOb_GobO695V_7He-GNXay-K6apDPjEuWWg3sJSIg" alt="Profile" />
      </ProfileContainer>

    <Form>
      <FlexContainer>
        <FormGroup>
          <Label className='label'>{fields[0].label}</Label>
          <Input className='input' type={fields[0].type} placeholder={fields[0].placeholder}  />
        </FormGroup>
        <FormGroup>
            <Label className='label'>{fields[1].label}:</Label>
            <Input className='input' type={fields[1].type} placeholder={fields[1].placeholder} />
          </FormGroup>
      </FlexContainer>
      {fields.slice(2,5).map((field) => (
        <FormGroup key={field.name}>
          <Label>{field.label}</Label>
          <Input type={field.type} className='input-width' placeholder={field.placeholder} />
        </FormGroup>
      ))}
      <FlexContainer>
          <FormGroup>
            <Label className='label'>{fields[5].label}:</Label>
            <Input type={fields[5].type} className='input' placeholder={fields[5].placeholder} />
          </FormGroup>
          <FormGroup>
            <Label className='label'>{fields[6].label}:</Label>
            <Input type={fields[6].type} className='input' placeholder={fields[6].placeholder} />
          </FormGroup>
        </FlexContainer>
        <FormGroup>
          <Label>{fields[7].label}:</Label>
          <Input type={fields[7].type} className='input-width' placeholder={fields[7].placeholder} />
        </FormGroup>
        <ButtonContainer>
          <Button className='cancel'>Cancel</Button>
          <Button className='save'>Save</Button>
        </ButtonContainer>
    </Form>
    </Content>
  );
}

export default Contentbox;



