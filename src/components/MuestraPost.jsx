import React from 'react';
import './MuestraPost.css';

const MuestraPosts = (props) => {
    let datosPosts = props.listaPosts;
    return (
        <div className="muestra-posts">
            {datosPosts.map((item) => {
                return (
                    <div className='tarjeta-post' key={item.id}>
                        <h2 className="titulo-post">{item.nombre}</h2>
                        <span className="fechahora-post">Publicado el: {item.datetime}</span>
                        <p className="contenido-post">{item.opinion}</p>
                        <h4 className="autor-post">Visita Recomendada {item.recomendacion}</h4>
                        <h4 className="autor-post">Autor: {item.creador}</h4>
                    </div>
                );
            })}
        </div>
    )
}

export default MuestraPosts
