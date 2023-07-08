import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  flex: 1;
  padding: 20px 20px 20px 100px;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap:55%;
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

const FormGroup = styled.div`
  display: flex;
  align-items: center;
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

const fields = [
  { label: 'First Name', name: 'firstName', type: 'text' },
  { label: 'Last Name', name: 'lastName', type: 'text' },
  { label: 'Email', name: 'email', type: 'email' },
  { label: 'Mobile Number', name: 'mobileNo', type: 'text' },
  { label: 'Password', name: 'password', type: 'password' },
  { label: 'College Start Date', name: 'collegeStartDate', type: 'text' },
  { label: 'College End Date', name: 'collegeEndDate', type: 'text' },
  { label: 'Resume', name: 'resume', type: 'file' },
];

function content() {
  return (
    <Content>
      <ProfileContainer>
        <ProfileName>Edit Profile</ProfileName>
        <ProfileImage src="https://media.licdn.com/dms/image/C5603AQEWw0FH_H6RCw/profile-displayphoto-shrink_800_800/0/1517580260726?e=2147483647&v=beta&t=aNMOb_GobO695V_7He-GNXay-K6apDPjEuWWg3sJSIg" alt="Profile" />
      </ProfileContainer>

      <Form>
        {fields.map((field) => (
          <FormGroup key={field.name}>
            <Label>{field.label}:</Label>
            <Input type={field.type} />
          </FormGroup>
        ))}
        
        <ButtonContainer>
          <Button>Cancel</Button>
          <Button>Save</Button>
        </ButtonContainer>
      </Form>
    </Content>
  );
}

export default content;
