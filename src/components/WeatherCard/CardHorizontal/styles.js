import styled from "styled-components";

const Container = styled.View`
  justify-content: center;
  align-items: flex-end;
  background: ${props => props.background || "#86DEEA"};
  height: 85px;
  border-radius: 10px;
  width: 100%;
  padding: 8px;
  flex-direction: row;
`;

const Location = styled.View`
  flex-direction: row;
  margin: 0 auto;
`;

const TextDate = styled.Text`
  font-family: "montserrat-medium";
  font-size: 16px;
`;

const TextDateMonth = styled.Text`
  font-family: "montserrat-regular";
  font-size: 12px;
`;

const TextLoc = styled.Text`
  font-family: "montserrat-regular";
  font-size: 12px;
`;

const TextTemp = styled.Text`
  font-family: "montserrat-medium";
  font-size: 24px;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;

const TextTempRange = styled.Text`
  font-size: 12px;
  font-family: "montserrat-regular";
  color: ${props => props.color_sub || "#408D97"};
`;

const Temperature = styled.View`
  flex-direction: row;
`;

const Pin = styled.Image`
  width: 10px;
  height: 10px;
`;

const ImageContainer = styled.View`
  position: absolute;
  /* width: 45px;
  height: 40px; */
  right: -10px;
  top: 0px;
`;

const Line = styled.View`
  width: 1px;
  height: 50px;
  background: white;
  margin: auto 10px;
`;

const Date = styled.View``;

export {
  Container,
  Temperature,
  ImageContainer,
  Date,
  Location,
  Line,
  Pin,
  TextTempRange,
  TextTemp,
  TextLoc,
  TextDate,
  TextDateMonth
};
