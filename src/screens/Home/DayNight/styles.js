import styled from "styled-components";

import Layout from "../../../constants/Layout";

export const Container = styled.View`
  background-color: rgba(0, 0, 0, 0.8);
  width: ${Layout.window.width};
  height: ${Layout.window.height / 3};
  overflow: hidden;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`;
