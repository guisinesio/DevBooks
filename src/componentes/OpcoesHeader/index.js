import styled from 'styled-components'

const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  height: 100%;
  padding: 0 5px;
  min-width: 120px;
`
const Opcoes = styled.ul`
  display: flex  
`

const textoOpcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS']

function OpcoesHeader() {
    return (
        <Opcoes>
          {textoOpcoes.map((texto)=> (
            <Opcao><p className='lista'>{texto}</p></Opcao>
          ))}
        </Opcoes>
    )
};

export default OpcoesHeader;