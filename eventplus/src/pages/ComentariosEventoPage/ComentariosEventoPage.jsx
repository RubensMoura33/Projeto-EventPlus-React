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



const ComentariosEventoPage = () => {

    const {idEvento} = useParams();
    // recupera os dados globais do usuário
    const { userData, setUserData } = useContext(UserContext);
    const [nomeEvento, setNomeEvento] = useState([]);
    const [descricao, setDescricao] = useState([]);
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

            setNomeEvento(retorno.data.nomeEvento);
            setDescricao(retorno.data.descricao);
            setData(dateFormatDbToView(retorno.data.dataEvento) );
            console.log(retorno.data);
        } catch (error) {

            alert('erro')
        }
    }
    return (
        <MainContent>
            <Container>
                <Title titleText={"Comentarios do Evento"} className="custom-title" />

                <table className="table-data">
                    <thead className="table-data__head">

                        <tr className="table-data__head-row">
                            <th className="table-data__head-title table-data__head-title--big">
                                Evento
                            </th>
                            <th className="table-data__head-title table-data__head-title--big">
                                Descrição
                            </th>
                            <th className="table-data__head-title table-data__head-title--big">
                                Tipo Evento
                            </th>
                            <th className="table-data__head-title table-data__head-title--big">
                                Data
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                            
                                <tr className="table-data__head-row">
                                    <td className="table-data__data table-data__data--big">
                                        {nomeEvento}
                                    </td>

                                    <td className="table-data__data table-data__data--big">
                                        {descricao}
                                    </td>

                                    <td className="table-data__data table-data__data--big">
                                        {tipoEvento}
                                    </td>

                                    <td className="table-data__data table-data__data--big">
                                        {data}
                                    </td>
                                </tr>
                            
                        
                    </tbody>
                </table>

                {/* <Table
            dados={eventos}
            fnConnect={handleConnect}
            fnShowModal={showHideModal}
          /> */}
            </Container>
        </MainContent>
    );
};

export default ComentariosEventoPage;