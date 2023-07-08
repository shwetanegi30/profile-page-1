import React from 'react';
import styled from 'styled-components';
import fields from './contentList';

const Content = styled.div`
  flex: 1;
  padding: 0px 20px 20px 167px;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
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
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FlexContainer = styled.div`
  display: flex;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Label = styled.label`
  width: 120px;
  margin-right: 10px;
`;

const Input = styled.input`
  width: 200px;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  margin-right: 10px;
`;

function content() {
  return (
    <Content>
      <ProfileContainer>
        <ProfileName>Edit Profile</ProfileName>
        <ProfileImage src="https://media.licdn.com/dms/image/C5603AQEWw0FH_H6RCw/profile-displayphoto-shrink_800_800/0/1517580260726?e=2147483647&v=beta&t=aNMOb_GobO695V_7He-GNXay-K6apDPjEuWWg3sJSIg" alt="Profile" />
      </ProfileContainer>

    <Form>
      <FlexContainer>
        <FormGroup>
          <Label>{fields[0].label}</Label>
          <Input type={fields[0].type} />
        </FormGroup>
        <FormGroup>
            <Label>{fields[1].label}:</Label>
            <Input type={fields[1].type} />
          </FormGroup>
      </FlexContainer>
      {fields.slice(2,5).map((field) => (
        <FormGroup key={field.name}>
          <Label>{field.label}</Label>
          <Input type={field.type} />
        </FormGroup>
      ))}
      <FlexContainer>
          <FormGroup>
            <Label>{fields[5].label}:</Label>
            <Input type={fields[5].type} />
          </FormGroup>
          <FormGroup>
            <Label>{fields[6].label}:</Label>
            <Input type={fields[6].type} />
          </FormGroup>
        </FlexContainer>
        <FormGroup>
          <Label>{fields[7].label}:</Label>
          <Input type={fields[7].type} />
        </FormGroup>
        <ButtonContainer>
          <Button>Cancel</Button>
          <Button>Save</Button>
        </ButtonContainer>
    </Form>
    </Content>
  );
}

export default content;
