import React, { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../Services/Url"
import { ContainerTabela } from "./Styled"
import ScrollButton from "../../Scroll/Scroll"

const Tabela = () => {
    const [cadastros, setCadastros] = useState([])

    useEffect(() => {
        listaDeCadastro()
    }, [])

    const listaDeCadastro = () => {
        axios.get(`${BASE_URL}/all`)
        .then((res) => {
            setCadastros(res.data.allUsers)
            console.log(res.data)
        })
        .catch((erro) => {
            console.log(erro.data)
        })
    }
    return(
        <ContainerTabela>
            <div className="container-table">
                
                <h2>Lista de Cadastro</h2>
                
                <div className="table">
                <table>
                    <thead>
                <tr>
                    <th className="row-name"></th>
                    <th className="row-name-info">NOME</th>
                    <th className="row-name-info">EMAIL</th>
                    <th className="row-name-info">NASCIMENTO</th>
                    <th className="row-name-info">TELEFONE</th>
                </tr>
                {cadastros.map((item, index) => {
                return <tr>
                <td className="row-number">{index +1}</td>
                <td className="row-info">{item.nome}</td>
                <td className="row-info">{item.email}</td>
                <td className="row-info">{item.nascimento}</td>
                <td className="row-info">{item.telefone}</td>
            </tr>
        })}
                </thead>
                
        </table>
            
            
        </div>
            </div>
            <ScrollButton />
        </ContainerTabela>
    )
}
export default Tabela