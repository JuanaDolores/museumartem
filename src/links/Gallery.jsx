import React from 'react';
import "./Gallery.css";

import GifOne from '../images/giphy.gif';

import ArtworkOne from '../images/artwork_one.gif';
import ArtworkTwo from '../images/artwork_two.gif';
import ArtworkThree from '../images/artwork_three.gif';
import ArtworkFour from '../images/artwork_four.gif';
import ArtworkFive from '../images/artwork_five.gif';

const Gallery = () => {

    return (
        <div>
            <img className="bigImage" src={GifOne} alt="First slide" />
            <h1 className="title">Exposiciones</h1>

            <div className="wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="card mx-30 border-0">
                                <img src={ArtworkOne} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title titleColour spaceOne">
                                        Kidlat Tahimik</h5>
                                    <h6 className="subsubtitle spaceOne">
                                        29 octubre, 2021 – 6 marzo, 2022</h6>
                                    <p className="card-text spaceOne">
                                        Su práctica artística se manifiesta en grandes instalaciones plásticas interdisciplinares que evidencian constantes sinergias y transferencias con su trabajo cinematográfico.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="card mx-30 border-0">
                                <img src={ArtworkTwo} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title titleColour spaceOne">
                                        Niño de Elche</h5>
                                    <h6 className="subsubtitle spaceOne">
                                        7 octubre, 2020 - noviembre, 2021</h6>
                                    <p className="card-text spaceOne">
                                        Esta obra, prácticamente desconocida —solo llegó a presentarse, en junio de 1952, de manera parcial y tentativa—, puede entenderse como una suerte".</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="card mx-30 border-0">
                                <img src={ArtworkThree} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title titleColour spaceOne">
                                        Llamada</h5>
                                    <h6 className="subsubtitle spaceOne">
                                        16 abril, 2021 – 8 mayo, 2022</h6>
                                    <p className="card-text spaceOne">
                                        Llamada 1950-2020 articula un diálogo visual que refleja la producción artística en tres momentos históricos, desde la independencia hasta el presente.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="card mx-30 border-0">
                                <img src={ArtworkFour} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title titleColour spaceOne">
                                        Ida Applebroog</h5>
                                    <h6 className="subsubtitle spaceOne">
                                        2 junio – 27 septiembre, 2021</h6>
                                    <p className="card-text spaceOne">
                                        La presente retrospectiva toma como punto de partida el amplio conjunto de dibujos a tinta, acuarela y lápiz que realizó en el Mercy Hospital como parte de su terapia.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="card mx-30 border-0">
                                <img src={ArtworkFive} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title titleColour spaceOne">
                                        Vivian Suter</h5>
                                    <h6 className="subsubtitle spaceOne">
                                        25 junio, 2021 – 2 mayo, 2022</h6>
                                    <p className="card-text spaceOne">
                                        En su estudio situado en Panajachel, sobre el terreno de una antigua plantación cafetera junto al lago Atitlán, la obra de Suter ha evolucionado hacia un intercambio.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;