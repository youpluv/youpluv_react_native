import styled from "styled-components";

const Container = styled.View`
  justify-content: space-evenly;
  height: 180px;
  border-radius: 10px;
  width: 100%;
  padding: 0 10px;
`;

const Location = styled.View`
  flex-direction: row;
  margin: 0 auto;
`;

const TextDate = styled.Text`
  font-family: "montserrat-medium";
  margin: 10px 0px 0px 0px;
  font-size: 16px;
  line-height: 17px;
`;

const TextDateMonth = styled.Text`
  font-family: "montserrat-regular";
  margin: 10px 0px 0px 0px;
  font-size: 12px;
`;

const TextLoc = styled.Text`
  font-family: "montserrat-regular";
  font-size: 18px;
`;

const TextTemp = styled.Text`
  font-family: "montserrat-medium";
  font-size: 32px;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;

const TextTempRange = styled.Text`
  font-size: 14px;
  font-family: "montserrat-regular";
  color: ${props => props.color_sub || "#408D97"};
`;

const Temperature = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 7px;
`;

const Pin = styled.Image`
  width: 10px;
  height: 10px;
`;

const Image = styled.Image`
  width: 60px;
  height: 55px;
  margin: auto;
  margin-right: -25px;
`;

const Date = styled.View``;

export {
  Container,
  Temperature,
  Image,
  Date,
  Location,
  Pin,
  TextTempRange,
  TextTemp,
  TextLoc,
  TextDate,
  TextDateMonth
};
