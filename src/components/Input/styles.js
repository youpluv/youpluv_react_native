import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components";

const Icon = styled(MaterialIcons)`
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  font-size: 20px;
  padding: 10px;
  text-align: center;
  /* text-align-vertical: "center"; */
  background-color: transparent;
`;

const IconLeft = styled(MaterialIcons)`
  font-size: 22px;
  padding: 10px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
`;
const MessageError = styled.Text`
  position: absolute;
  bottom: -20;
  left: ${props=> props.hasIcon ? 50 : 30};
  color:#9A0000;
`
export { Icon, IconLeft, MessageError};
