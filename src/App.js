import styled from 'styled-components';
import Header from './componentes/Header/index.js';
import UltimosLancamentos from './componentes/UltimosLancamentos/index.js';
import Pesquisa from './componentes/Pesquisa'

const AppContainer = styled.div `

  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589); 
`

function App() {
  return (
    <AppContainer>
      <Header/>    
      <Pesquisa/>    
      <UltimosLancamentos/> 
    </AppContainer>
  );
}

export default App;
