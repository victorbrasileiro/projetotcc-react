import styled from 'styled-components'

const textoOpcoes = ['Página Inicial', 'Serviços', ];

const Opcao = styled.li`
    display: flex;
    min-width: 120px;
    font-size: 23px;
    margin-left: 80px;
    padding-top: 10px;
    cursor: pointer;
`
const Opcoes = styled.ul`
  display: flex;
  padding-left: 20px;
  padding-right: 100px; 
`
const OpcaoTexto = styled.p`
  font-size: 20px;
  font-weight: 500;
`

function OpcoesHeader() {
    return (
        <Opcoes>
          { textoOpcoes.map( (texto) => ( 
            <Opcao>
              <OpcaoTexto>
                {texto}
              </OpcaoTexto>
            </Opcao>
          ) ) }
        </Opcoes>
    )
}

export default OpcoesHeader