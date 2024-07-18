import Header from './componentes/Header'
import styled from 'styled-components'
import React from 'react';

const AppContainer = styled.div `
    width: 100vw;
    height: 100vh;
    /* background-image: linear-gradient(90deg, #002911 35%, #625599); */
    background-image: linear-gradient(90deg, #2e303d 30%, #6d6f7e);
`
function App() {
  return (
    <AppContainer>
      <Header />
      
    </AppContainer>
  );
}

export default App;
