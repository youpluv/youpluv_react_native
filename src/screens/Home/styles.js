import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  /* background-color: #f00; */
  border-radius: 10;
  /* // paddingTop: Layout.window.height / 2.5; */
  align-items: center;
`;

const Content = styled.View`
  flex: 1;
  width: 100%;
  background-color: #fff;
  border-radius: 30px;
  margin-top: -30px;
  justify-content: center;
  align-items: center;
`;

export { Container, Content };
