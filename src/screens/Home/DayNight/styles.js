import styled from "styled-components";

import Layout from "../../../constants/Layout";

export const Container = styled.View`
  background-color: rgba(0, 0, 0, 0.8);
  /* position: absolute; */
  /* top: 0; */
  width: ${Layout.window.width};
  height: ${Layout.window.height / 2.5};
  overflow: hidden;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  /* margin-top: -90px; */
  /* elevation: 10; */
  /* z-index: 2; */
`;
