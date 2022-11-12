import style from './DetalhesLivro.module.scss'
import Header from "../../components/Header";
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Titulo from '../../components/Titulo'
import Sinopse from '../../components/Sinopse'
import {Botao} from '../../components/Botao'

const DetalhesLivro = () => {
    return ( 
    <>
        
        <Banner/>
        <Titulo forNome = "Livro"/>
        
        <div className={style.wrap}>
            <img className={style.img} src='https://www.carochinhaeditora.com.br/wp-content/uploads/2021/01/Ah-nao_E01_CAPA-V1.png' />
            <h1 className={style.preco}>Preço : R$20,00</h1>            
            <Botao className ={style.botao} botao="Comprar"/>
            <Sinopse forNome = "Sinopse" forResumo = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
        </div>
        
         
        
    </>
    )


}


export default DetalhesLivro