import styled from "styled-components"

export const Titulo = styled.h1 `
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${props => props.cor || '#000'};
    font-size: ${props => props.tamanhoFonte || '30px'};
    text-align: ${props => props.alinhamento || 'center'};
    margin: 0;
`