import React from 'react';
import MainContent from '../../../components/Main/MainContent';
import Container from '../../../components/Container/Container';
import Title from '../../../components/Title/Title';
import { useEffect, useState } from 'react';
import api,{ commentaryEvent } from '../../../Services/Service';
import "./TableCE.css"

const TableCE = ({id}) => {

const [comentario , setComentario] = useState ([]);

useEffect (() => {
    
    loadCommentary();
}, [])

async function loadCommentary (){
    try {
        const retorno = await api.get(`${commentaryEvent}?id=${id}`)
        console.log(retorno.data);
        setComentario(retorno.data)
    } catch (error) {
        alert('erro')
    }
}
    
    return (
    <MainContent>
            <Container>
                <Title titleText={"Comentarios do Evento"} color='white' />

                <table className="tble-data"  >
                    <thead className="tble-data__head">

                        <tr className="tble-data__head-row">
                            <th className="tble-data__head-title tble-data__head-title--big">
                                Nome do usuario
                            </th>
                            <th className="tble-data__head-title tble-data__head-title--big">
                                Descrição
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                    {comentario.map((e) => {
                                return(
                                <tr className="tble-data__head-row">
                                    <td className="tble-data__data tble-data__data--big">
                                        {e.usuario.nome}
                                    </td>

                                    <td className="tble-data__data tble-data__data--big">
                                        {e.descricao}
                                    </td>


                                </tr>
                            
                        )
                            })}
                    </tbody>
                </table>

            </Container>
        </MainContent>
    );
};

export default TableCE;


