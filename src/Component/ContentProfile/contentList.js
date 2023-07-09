import { Checkbox, Eye, Calender, Folder } from "../SvgIcons/svg";
export const VIEWS = {
  STUDENT: "student",
  PROFESSIONAL: "professional",
};
export const fields = {
  [VIEWS.STUDENT]: [
    {
      label: "First Name",
      name: "firstName",
      type: "text",
      placeholder: "Ileana",
    },
    {
      label: "Last Name",
      name: "lastName",
      type: "text",
      placeholder: "Bozorgi",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Ileanabozorgi.business@gmail.com",
      icon: <Checkbox />,
    },
    {
      label: "Mobile Number",
      name: "mobileNo",
      type: "text",
      placeholder: "9876543210",
      icon: <Checkbox />,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "abc123",
      icon: <Eye />,
    },
    {
      label: "College Start Date",
      name: "collegeStartDate",
      type: "text",
      placeholder: "01/01/1990",
      icon: <Calender />,
    },
    {
      label: "College End Date",
      name: "collegeEndDate",
      type: "text",
      placeholder: "01/01/1993",
      icon: <Calender />,
    },
    {
      label: "Resume",
      name: "resume",
      type: "text",
      placeholder: "Upload File",
      icon: <Folder />,
    },
  ],
  [VIEWS.PROFESSIONAL]: [
    {
      label: "Company Name",
      name: "company",
      type: "text",
      placeholder: "Google",
    },
    {
      label: "Website URL",
      name: "Website",
      type: "text",
      placeholder: "Google.com",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Ileanabozorgi.business@gmail.com",
      icon: <Checkbox />,
    },
    {
      label: "Mobile Number",
      name: "mobileNo",
      type: "text",
      placeholder: "9876543210",
      icon: <Checkbox />,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "abc123",
      icon: <Eye />,
    },
    {
      label: "Account Manger Name",
      type: "text",
      placeholder: "Martin",
    },
    {
      label: "Account Manger Function",
      type: "text",
      placeholder: "George",
    },
    {
      label: "Industry",
      type: "file",
      placeholder: "Industry Name",
    },
  ],
};
