import {
  FaQuestionCircle,
} from "react-icons/fa";
import { RiSettings2Line, RiNotification2Line } from 'react-icons/ri';
import { AiOutlineLock } from 'react-icons/ai';
import { TiPencil } from 'react-icons/ti';

const settingsData = [
  {
    id: 1,
    title: "Edit Profile",
    icon: <TiPencil />,
  },
  {
    id: 2,
    title: "Notification",
    icon: <RiNotification2Line />,
  },
  {
    id: 3,
    title: "Security",
    icon: <AiOutlineLock  />,
  },
  { 
    id: 4, 
    title: "Appearance", 
    icon: <RiSettings2Line /> 
  },
  { 
    id: 5,
     title: "Help", 
     icon: <FaQuestionCircle /> 
    },
];

export default settingsData;
