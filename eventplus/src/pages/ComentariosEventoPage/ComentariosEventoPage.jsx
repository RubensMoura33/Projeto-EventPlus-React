import React, { useEffect, useState, useContext } from 'react';
import MainContent from '../../components/Main/MainContent';
import Container from '../../components/Container/Container';
import Title from '../../components/Title/Title';
import "./ComentariosEventoPage.css";
import { dateFormatDbToView } from '../../Utils/stringFunctions';
import api from '../../Services/Service';
import { eventsResource } from '../../Services/Service';
import { UserContext } from "../../context/AuthContext";



const ComentariosEventoPage = () => {

    // recupera os dados globais do usuário
    const { userData, setUserData } = useContext(UserContext);
    const [evento, setEvento] = useState([]);

    //GET EVENTOS
    useEffect(() => {
        async function loadEvent() {
            try {
                const retorno = await api.get(eventsResource);
                setEvento(retorno.data);
                console.log(retorno.data);
            } catch (error) {

                alert('erro')
            }
        }
        loadEvent();
    }, []);

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
                        {evento.map((e) => {
                            return (
                                <tr className="table-data__head-row">
                                    <td className="table-data__data table-data__data--big">
                                        {e.nomeEvento}
                                    </td>

                                    <td className="table-data__data table-data__data--big">
                                        {e.descricao}
                                    </td>

                                    <td className="table-data__data table-data__data--big">
                                        {e.tiposEvento.titulo}
                                    </td>

                                    <td className="table-data__data table-data__data--big">
                                        {dateFormatDbToView(e.dataEvento)}
                                    </td>
                                </tr>
                            );
                        })}
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