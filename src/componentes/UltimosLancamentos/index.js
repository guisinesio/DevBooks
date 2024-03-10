import { livros } from './dadosUltimosLancamentos'
import { Titulo } from '../Titulo'
import CardRecomenda from '../CardRecomenda';
import imagemLivro from '../../imagens/livro2.png'
import styled from 'styled-components';

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`
const Image = styled.img`
    transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &:hover {
        transform: scale(1.05); 
    }
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
                cor="#EB9B00"
                tamanhoFonte= "36px"
            >
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                {livros.map( livro => (
                    <Image src={livro.src}/>
                ))}
            </NovosLivrosContainer>    
            <CardRecomenda
                titulo="Talvez voce se interesse por"
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
        
    )
}

export default UltimosLancamentos;