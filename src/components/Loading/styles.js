import styled from 'styled-components';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,.8);
    position: absolute;
    width: ${width};
    height: ${height};
    elevation: 10;
    z-index: 2;
`;

export const Content = styled.View`
    justify-content: center;
    align-items: center;
    /* flex-direction: row; */
    background-color: rgb(255,255,255);
    position: absolute;
    flex: 1;
    width: 250;
    height: 250;
    border-radius: 3;
    elevation: 3;
    justify-content: center;
    align-items: center;
`;
