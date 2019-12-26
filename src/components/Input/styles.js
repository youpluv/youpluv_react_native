import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components";

const Icon = styled(MaterialIcons)`
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  font-size: 20px;
  padding: 10px;
  text-align: center;
  /* text-align-vertical: "center"; */
  background-color: transparent;
`;

const IconLeft = styled(MaterialIcons)`
  font-size: 22px;
  padding: 10px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
`;

export { Icon, IconLeft };
