import React, { useEffect, useState, useContext } from 'react';
import MainContent from '../../components/Main/MainContent';
import Container from '../../components/Container/Container';
import Title from '../../components/Title/Title';
import "./ComentariosEventoPage.css";
import { dateFormatDbToView } from '../../Utils/stringFunctions';
import api, { eventsTypeResource } from '../../Services/Service';
import { eventsResource } from '../../Services/Service';
import { UserContext } from "../../context/AuthContext";
import { useParams } from 'react-router-dom';
import TableCE from './TableCE/TableCE';

const ComentariosEventoPage = () => {

    const {idEvento} = useParams();
    // recupera os dados globais do usuário
    const { userData, setUserData } = useContext(UserContext);

    const [evento, setEvento] = useState([]);
    const [tipoEvento, setTipoEvento] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        
        loadEvent();
    }, []);
    
    async function loadEvent() {
        try {
            const retorno = await api.get(eventsResource + '/' + idEvento);
            const getType = await api.get(`${eventsTypeResource}/${retorno.data.idTipoEvento}`)
            console.log(getType.data);
            setTipoEvento (getType.data.titulo)
            setEvento(retorno.data)
            setData(dateFormatDbToView(retorno.data.dataEvento) );
            console.log(retorno.data);
        } catch (error) {

            alert('erro')
        }
    }
    return (
        <MainContent>
            <section className='info-evento-section'>
            <Container>
                <Title titleText={"Detalhes do Evento"} className="custom-title" />

                <table className="tabl-data">
                    <thead className="tabl-data__head">

                        <tr className="tabl-data__head-row">
                            <th className="tabl-data__head-title tabl-data__head-title--big">
                                Evento
                            </th>
                            <th className="tabl-data__head-title tabl-data__head-title--big">
                                Descrição
                            </th>
                            <th className="tabl-data__head-title tabl-data__head-title--big">
                                Tipo Evento
                            </th>
                            <th className="tabl-data__head-title tabl-data__head-title--big">
                                Data
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                            
                                <tr className="tabl-data__head-row">
                                    <td className="tabl-data__data tabl-data__data--big">
                                        {evento.nomeEvento}
                                    </td>

                                    <td className="tabl-data__data tabl-data__data--big">
                                        {evento.descricao}
                                    </td>

                                    <td className="tabl-data__data tabl-data__data--big">
                                        {tipoEvento}
                                    </td>

                                    <td className="tabl-data__data tabl-data__data--big">
                                        {data}
                                    </td>
                                </tr>
                            
                        
                    </tbody>
                </table>


                
     </Container>
     </section>
            <section className="lista-eventos-section">
          
            <TableCE
              id = {idEvento}
            />
          
        </section>
        </MainContent>
    );
};

export default ComentariosEventoPage;