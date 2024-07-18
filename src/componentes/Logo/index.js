import styled from 'styled-components';
import logo from '../../Imagens/logo-img.png';

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    margin-left: 10px;
    color: #000;
`

const LogoImage = styled.img`
    max-width: 200px;
    max-height: 60px;
    padding-top: 30px;
`

const LogoName = styled.p`
  font-size: 30px;
  padding: 10px;
`

const Negrito = styled.strong`
  font-weight: bold;
  font-size: 30px;
`


function Logo() {
    return (
        <LogoContainer>
          <LogoImage 
            src={logo} 
            alt='Logo Sistema'>
          </LogoImage>
          <LogoName>
            <Negrito>VITA</Negrito>TAST
          </LogoName>
        </LogoContainer>
    );
}

export default Logo;