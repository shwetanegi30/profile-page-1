import React, { useEffect } from "react";
import {
  Content,
  ProfileContainer,
  ProfileName,
  ProfileImage,
  Form,
  FlexContainer,
  FormGroup,
  Label,
  Input,
  InputField,
  Calender,
  ButtonContainer,
  Button,
} from "./ContentStyled";
import queryString from "query-string";
import { fields, VIEWS } from "./contentList";

function Contentbox(props) {
  const [view, setView] = React.useState(VIEWS.STUDENT);

  useEffect(() => {
    const parsed = queryString.parse(window.location.search);
    let viewToRender = VIEWS.STUDENT;

    if (parsed.view == VIEWS.PROFESSIONAL || parsed.view == VIEWS.STUDENT) {
      viewToRender = parsed.view;
    }

    setView(viewToRender);
    console.log(viewToRender);
  }, []);

  return (
    <Content>
      <ProfileContainer>
        <ProfileName>Edit Profile</ProfileName>
        <ProfileImage
          src="https://media.licdn.com/dms/image/C5603AQEWw0FH_H6RCw/profile-displayphoto-shrink_800_800/0/1517580260726?e=2147483647&v=beta&t=aNMOb_GobO695V_7He-GNXay-K6apDPjEuWWg3sJSIg"
          alt="Profile"
        />
      </ProfileContainer>

      <Form>
        <FlexContainer>
          <FormGroup>
            <Label className="label">{fields[view][0].label}</Label>
            <Input
              className="input"
              type={fields[view][0].type}
              placeholder={fields[view][0].placeholder}
            />
          </FormGroup>
          <FormGroup>
            <Label className="label">{fields[view][1].label}:</Label>
            <Input
              className="input"
              type={fields[view][1].type}
              placeholder={fields[view][1].placeholder}
            />
          </FormGroup>
        </FlexContainer>
        {fields[view].slice(2, 5).map((field) => (
          <FormGroup key={field.name} className="form">
            <Label>{field.label}</Label>
            <InputField>
              <Input type={field.type} placeholder={field.placeholder} />
              {field.icon}
            </InputField>
          </FormGroup>
        ))}
        <FlexContainer>
          <FormGroup>
            <Label className="label">{fields[view][5].label}:</Label>
            <InputField>
              <Input
                type={fields[view][5].type}
                placeholder={fields[view][5].placeholder}
              />
              {fields[view][5].icon}
            </InputField>
          </FormGroup>
          <FormGroup>
            <Label className="label">{fields[view][6].label}:</Label>
            <InputField>
              <Input
                type={fields[view][6].type}
                placeholder={fields[view][6].placeholder}
              />
              {fields[view][6].icon}
            </InputField>
          </FormGroup>
        </FlexContainer>
        <FormGroup>
          <Label>{fields[view][7].label}:</Label>
          <Calender>
            <Input
              type={fields[view][7].type}
              placeholder={fields[view][7].placeholder}
            />
            {fields[view][7].icon}
          </Calender>
        </FormGroup>
        <ButtonContainer>
          <Button className="cancel">Cancel</Button>
          <Button className="save">Save</Button>
        </ButtonContainer>
      </Form>
    </Content>
  );
}

export default Contentbox;
