// import React from "react";
// import {
//   Content,
//   ProfileContainer,
//   ProfileName,
//   ProfileImage,
//   Form,
//   FlexContainer,
//   FormGroup,
//   Label,
//   Input,
//   InputField,
//   Calender,
//   ButtonContainer,
//   Button,
// } from "./ContenStyled";
// import {fields} from "./contentList";

// function Contentbox() {
//   return (
//     <Content>
//       <ProfileContainer>
//         <ProfileName>Edit Profile</ProfileName>
//         <ProfileImage
//           src="https://media.licdn.com/dms/image/C5603AQEWw0FH_H6RCw/profile-displayphoto-shrink_800_800/0/1517580260726?e=2147483647&v=beta&t=aNMOb_GobO695V_7He-GNXay-K6apDPjEuWWg3sJSIg"
//           alt="Profile"
//         />
//       </ProfileContainer>

//       <Form>
//         <FlexContainer>
//           <FormGroup>
//             <Label className="label">{fields[0].label}</Label>
//             <Input
//               className="input"
//               type={fields[0].type}
//               placeholder={fields[0].placeholder}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label className="label">{fields[1].label}:</Label>
//             <Input
//               className="input"
//               type={fields[1].type}
//               placeholder={fields[1].placeholder}
//             />
//           </FormGroup>
//         </FlexContainer>
//         {fields.slice(2, 5).map((field) => (
//           <FormGroup key={field.name} className="form">
//             <Label>{field.label}</Label>
//             <InputField>
//               <Input type={field.type} placeholder={field.placeholder} />
//               {field.icon}
//             </InputField>
//           </FormGroup>
//         ))}
//         <FlexContainer>
//           <FormGroup>
//             <Label className="label">{fields[5].label}:</Label>
//             <Calender>
//               <Input
//                 type={fields[5].type}
//                 placeholder={fields[5].placeholder}
//               />
//               {fields[5].icon}
//             </Calender>
//           </FormGroup>
//           <FormGroup>
//             <Label className="label">{fields[6].label}:</Label>
//             <div className="input">
//               <Input
//                 type={fields[6].type}
//                 placeholder={fields[6].placeholder}
//               />
//               {fields[6].icon}
//             </div>
//           </FormGroup>
//         </FlexContainer>
//         <FormGroup>
//           <Label>{fields[7].label}:</Label>
//           <Calender>
//             <Input type={fields[7].type} placeholder={fields[7].placeholder} />
//             {fields[7].icon}
//           </Calender>
//         </FormGroup>
//         <ButtonContainer>
//           <Button className="cancel">Cancel</Button>
//           <Button className="save">Save</Button>
//         </ButtonContainer>
//       </Form>
//     </Content>
//   );
// }

// export default Contentbox;

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
} from "./ContenStyled";
import queryString from "query-string";
import { fields, company } from "./contentList";

function Contentbox({ queryStringParams }) {
  useEffect(() => {
    if (queryStringParams && queryStringParams.company) {
      const companyData = queryString.parse(queryStringParams.company);
      console.log(companyData);

      const updatedCompanyData = { ...companyData, newProperty: "Some value" };
      const updatedQueryString = queryString.stringify({
        ...queryStringParams,
        company: queryString.stringify(updatedCompanyData),
      });

      console.log(updatedQueryString);
    }
  }, [queryStringParams]);
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
            <Label className="label">{fields[0].label}</Label>
            <Input
              className="input"
              type={fields[0].type}
              placeholder={fields[0].placeholder}
            />
          </FormGroup>
          <FormGroup>
            <Label className="label">{fields[1].label}:</Label>
            <Input
              className="input"
              type={fields[1].type}
              placeholder={fields[1].placeholder}
            />
          </FormGroup>
        </FlexContainer>
        {fields.slice(2, 5).map((field) => (
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
            <Label className="label">{fields[5].label}:</Label>
            <Calender>
              <Input
                type={fields[5].type}
                placeholder={fields[5].placeholder}
              />
              {fields[5].icon}
            </Calender>
          </FormGroup>
          <FormGroup>
            <Label className="label">{fields[6].label}:</Label>
            <Calender className="input">
              <Input
                type={fields[6].type}
                placeholder={fields[6].placeholder}
              />
              {fields[6].icon}
            </Calender>
          </FormGroup>
        </FlexContainer>
        <FormGroup>
          <Label>{fields[7].label}:</Label>
          <Calender>
            <Input type={fields[7].type} placeholder={fields[7].placeholder} />
            {fields[7].icon}
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
