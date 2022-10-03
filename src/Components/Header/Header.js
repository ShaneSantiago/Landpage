import React from "react"
import { ContainerHeader } from "./Styled"

const Header = () => {
    return(
        <ContainerHeader>
                <div className="container-header">
                <div className="container-nav">
                <img src="assets/logo-in8-dev.svg"/>
                <nav>
                <button>&#9776;</button>
                <ul>
                    <li>Cadastro</li>
                    <li>Lista</li>
                    <li>Sobre nós</li>
                </ul>
            </nav>
            </div>
            </div>
        </ContainerHeader>
    )
}
export default Header