import styled from "styled-components/native";
import Layout from "../../constants/Layout";

const Container = styled.View`
  flex: 1;
  border-radius: 10;
  align-items: center;
`;

const Content = styled.View`
  flex: 1;
  width: 100%;
  background-color: #fff;
  border-radius: 30px;
  margin-top: -30px;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled.Image`
  width: ${Layout.window.width - 50};
  height: ${Layout.window.height / 4.5};
`;
export { Container, Content, Image };
