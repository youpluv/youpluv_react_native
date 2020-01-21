import styled from 'styled-components'

const VolumeContainer = styled.View`
  height: ${props=> props.height*3};
  width: 88;
  background-color: #86DEEA;
  display: flex;
  align-self: flex-start;
  position: absolute;
  bottom: 51.9px;
  margin-left: 2.5px;
`;

export { VolumeContainer }