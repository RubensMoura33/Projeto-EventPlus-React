import axios from "axios";

/**
 * Rota para o recurso EventoS
 */
export const eventsResource = '/Evento';

/**
 * Rota para o recurso próximos Eventos
 */
export const nextEventResource = '/Evento/ListarProximos';

/**
 * Rota para o recurso próximos Eventos
 */
export const pastEventResource = '/Evento/ListarAnteriores';

/**
 * Rota para o recurso listar Minhas presencas
 */
export const myEventsResource = '/PresencasEvento/ListarMinhas'

/**
 * Rota para o recurso listar Minhas presencas
 */
export const presencesEventsResource = '/PresencasEvento'


/**
 * Rota para o recurso listar Minhas presencas
 */
export const commentaryEventIdResource = '/ComentariosEvento/BuscarPorId'
/**
 * Rota para o recurso listar Minhas presencas
 */
export const commentaryEvent = '/ComentariosEvento/ListarSomenteExibe'

/**
 * Rota para o recurso listar Minhas presencas
 */
export const commentaryEventResource = '/ComentariosEvento'

/**
 * Rota para o recurso Tipos de Eventos
 */
export const eventsTypeResource = '/TiposEvento';

//Rota para o recurso de Login
export const loginResource = '/Login'

// const apiPort = '5000'
// const localApiUrl= `http://localhost:${apiPort}/api`
const externalApiUrl = `https://eventwebapi-rubens.azurewebsites.net/api`;

const api = axios.create({
    baseURL: externalApiUrl
});

export default api;