import React from 'react';
import './PastEvents.css'
import {dateFormatDbToView} from '../../Utils/stringFunctions'
import { Tooltip } from 'react-tooltip';
import { Link } from 'react-router-dom';



const PastEvent = ({title, description, eventDate, idEvent, buttonText, buttonLink}) => {
    function visualizar(idEvent) {
        alert(`Chamar o recurso para conectar: ${idEvent}`)
    }
    return (
        <article className='event-card'>
            <h2 className='event-card__title'>{title}</h2>

            <p className='event-card__description'
            data-tooltip-id={idEvent}
            data-tooltip-content={description}
            data-tooltip-place="top">
                
                <Tooltip id={idEvent} className="tooltip" />
                
                {description.substr(0, 15)}...
            </p>

            <p className='event-card__description'>
               {dateFormatDbToView(eventDate)} 
            </p>
         {/* onClick={() => {visualizar(idEvent)}} */}
            <Link to= {buttonLink} className='event-card__connect-link' >{buttonText}</Link>
        </article>
    );
};

export default PastEvent;