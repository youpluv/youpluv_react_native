import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const Column = styled.View`
  flex: ${props => props.value};
  justify-content: space-between;
  /* :first-child { */
  margin: 10px;
  /* } */
`;
