import styled from 'styled-components';

export const ContainerForm = styled.View`
    width: 100%;
    max-width: 450;
    align-items: center;
    padding: 0px 30px ;
`;

export const Row = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: ${props => props.justify || 'flex-end'};
    font-style: italic;
`

export const FormResetPass = styled.View`
    width: 100%;
    max-width: 450;
    align-items: center;
`;