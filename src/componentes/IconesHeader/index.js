import perfil from '../../Imagens/perfil.svg';
import styled from 'styled-components';

const Icone = styled.li`
  margin-left: -50px;
  align-items: center;
  list-style: none;
`

const Icones = styled.ul`
  display: flex;
  padding-top: 20px;
`

const IconeImage = styled.img`
  max-width: 50px;
`

const icones = [perfil];

function IconesHeader() {
    return (
        <Icones>
          { icones.map( (icone) => (
            <Icone>
              <IconeImage 
                src={icone}>
              </IconeImage>
            </Icone>
          ))}
        </Icones>
    )
}

export default IconesHeader;

//O metodo MAP vai criar uma nova lista dos elementos listados