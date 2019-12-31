import styled, { css } from 'styled-components'

const Container = styled.View`
align-items:center;
background:${props => props.background || '#86DEEA'};
width: 128px;
height: 148px;
border-radius:10px;
    ${props => props.vertical && css`
        width: 179px;
        height: 70px;
        margin-bottom:8px;
        flex-direction:row;
    `}
`

const Location = styled.View`
flex-direction: row;
`

const MyText = styled.Text`
font-size:22px;
${props => props.temp && css`
        text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
        font-weight:700;
    `}
    ${props => props.temp_sub && css`
        font-size:15px;
        color:${props=> props.color_sub || '#408D97'}
        ${props => props.vertical && css`
            font-size:14px;
        `}
    `}
    ${props => props.loc && css`
        font-size:16px;
        ${props => props.vertical && css`
            font-size:14px;
            line-height: 13px;
        `}
    `}
    ${props => props.date && css`
        font-size:18px;
        ${props => props.vertical && css`    
            margin: 10px 0px 0px 0px
            font-size:16px;
            line-height:17px;
        `}
    `}
`
const Temperature = styled.View`
flex-direction:row;
margin-top:7px;
`
const MyImage = styled.Image`
width:60px;
height:55px;
margin: auto;
    ${props => props.loc && css`
        width: 10px;
        height: 10px;
    `}
    ${props => props.vertical && css`
        position:absolute;
        width:45px;
        height:40px;
        right: -5;
        top: -5;
    `}
`
const MyLine = styled.View`
width:1px; 
height:40px;
background:white;
margin: 0px 5px 0px 0px;
`
const MyDate = styled.View`
width:90%;
height:30%;
`

export {Container, MyText, Temperature, MyImage, MyDate, Location, MyLine}