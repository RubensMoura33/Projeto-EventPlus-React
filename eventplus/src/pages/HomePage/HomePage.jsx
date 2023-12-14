import React, {useEffect, useState} from 'react';
import './HomePage.css'
import Banner from '../../components/Banner/Banner'
import MainContent from '../../components/Main/MainContent';
import VisionSection from '../../components/VisionSection/VisionSection';
import ContactSection from '../../components/ContactSection/ContactSection'
import Title from '../../components/Title/Title'
import NextEvent from '../../components/NextEvent/NextEvent';
import Container from '../../components/Container/Container';
import api, { pastEventResource } from '../../Services/Service'
import { nextEventResource } from '../../Services/Service';
import Notification from '../../components/Notification/Notification';
import PastEvent from '../../components/PastEvents/PastEvents';



const HomePage = () => {
    const [notifyUser, setNotifyUser] = useState();

    const [nextEvents, setNextEvents] = useState([]);//dados mokcdados

    const [pastEvents, setPastEvents] = useState([]);//dados mokcdados

    //roda somente na inicialização do componente
    useEffect( () => {
        getNextEvents(); //roda a função
        getPastEvents(); //roda a funcao
    }, []);

    
    async function getNextEvents() {
        try {
            const promise = await api.get(`${nextEventResource}`);
            const dados = await promise.data;

            setNextEvents(dados);//atualiza o state
        } catch (error) {
            setNotifyUser({
                titleNote: "Erro",
                textNote: "Não foi possível carregar os próximos eventos. Verifique a sua conexão com a internet.",
                imgIcon: "danger",
                imgAlt:
                  "Imagem de ilustração de erro. Rapaz segurando um balão com símbolo X.",
                showMessage: true,
              });
        }
    }
    async function getPastEvents() {
        try {
            const promise = await api.get(`${pastEventResource}`);
            const dados = await promise.data;
            console.log(dados);
            setPastEvents(dados);//atualiza o state
        } catch (error) {
            setNotifyUser({
                titleNote: "Erro",
                textNote: "Não foi possível carregar os próximos eventos. Verifique a sua conexão com a internet.",
                imgIcon: "danger",
                imgAlt:
                  "Imagem de ilustração de erro. Rapaz segurando um balão com símbolo X.",
                showMessage: true,
              });
        }
    }

    return (
       <div>
        <Notification {...notifyUser} setNotifyUser={setNotifyUser}/>
           <MainContent>
                <Banner/>
                <section className='proximos-eventos'>
                    <Container>
                        <Title titleText={"Proximos Eventos"}/>

                        <div className='events-box'>

                            {
                                nextEvents.map((e) => {
                                    return(
                                        <NextEvent
                                        key={e.idEvento}
                                        title={e.nomeEvento}
                                        description={e.descricao}
                                        eventDate={e.dataEvento}
                                        idEvent={e.idEvento}
                                        buttonLink = {"/eventos-aluno"}
                                        buttonText = {"Conectar"}
                                    />
                                    )
                                })
                            }

                            
                              
                        </div>
                    </Container>
                </section>

                <section className='proximos-eventos'>
                    <Container>
                        <Title titleText={"Eventos Anteriores"}/>

                        <div className='events-box'>

                            {
                                pastEvents.map((e) => {
                                    return(
                                        <PastEvent
                                        key={e.idEvento}
                                        title={e.nomeEvento}
                                        description={e.descricao}
                                        eventDate={e.dataEvento}
                                        idEvent={e.idEvento}
                                        buttonText = {"Visualizar"}
                                    />
                                    )
                                })
                            }

                            
                              
                        </div>
                    </Container>
                </section>
                <VisionSection/>
                <ContactSection/>    
           </MainContent>
       </div>
    );
};

export default HomePage;