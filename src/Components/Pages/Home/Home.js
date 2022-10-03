import React from "react"
import Footer from "../../Footer/Footer"
import Header from "../../Header/Header"
import Cadastro from "../Cadastro/Cadastro"
import Tabela from "./TabelaDeCadastro"
import { Container } from "./Styled"

const Home = () => {
    return(
        <Container>
            <Header />
            <div className="container">
            <div className="info">
                <div className="container-title">
            <h2>ESTÁGIO</h2>
            <p>PROVA DE SELEÇÃO</p>
            </div>
            </div>
            </div>
            <Cadastro />
            <Tabela />
            <Footer />
        </Container>
    )
}
export default Home