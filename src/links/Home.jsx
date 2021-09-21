import React from "react";
import { Carousel } from "react-bootstrap";

import ImageOneCarousel from "../images/image-one-carrousel.jpg";
import ImageTwoCarousel from "../images/image-two-carrousel.jpg";
import ImageThreeCarousel from "../images/image-three-carrousel.jpg";

import ImageOne from '../images/image_one.jpg';
import ImageTwo from '../images/image_two.jpg';
import ImageThree from '../images/image_three.jpg';

import "./Home.css";

const Home = () => {

  return (
    <div>
      <Carousel className="carousel">
        <Carousel.Item>
          <img
            src={ImageOneCarousel}
            className="d-block w-100"
            alt="Primera imagen del carrousel"
          />
          <Carousel.Caption>
            <h3>Manuela Ferreira</h3>
            <p>Inauguración de Estancias el día 24/10/2021 a las 19:30h</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={ImageTwoCarousel}
            className="d-block w-100"
            alt="Segunda imagen del carrousel"
          />
          <Carousel.Caption>
            <h3>Luis Cabrera</h3>
            <p>Inauguración de Ruido el día 15/11/2021 a las 19:30h</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={ImageThreeCarousel}
            className="d-block w-100"
            alt="Tercera imagen del carrousel"
          />
          <Carousel.Caption>
            <h3>Lorenzo Hernández</h3>
            <p>
              Inauguración de Texturas sangrantes el día 10/12/2021 a las 19:30h
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h1 className="title">Menciones honoríficas</h1>

      <div className="card mb-3 border-0" style={{ minHeight: "100%" }}>
        <div className="row g-12">
          <div className="col-md-6">
            <img
              src={ImageOne}
              className="img-fluid rounded-start"
              alt="..."
            ></img>
          </div>
          <div className="col-md-6">
            <div className="card-body ">
              <h5 className="card-title space">MUAC</h5>
              <p className="card-text textItalic space" >
                El Museo Universitario de Arte Contemporáneo se emplaza en el interior de los jardines más emblemáticos del casco antiguo.
              </p>
              <p className="card-text space" >
                Se trata de la antigua Casa del Mayorazgo edificada a principios del siglo XIX y adquirida por Alfonso Gourié Álvarez en 1859, siendo habitada por sus descendientes hasta los años setenta del siglo veinte, cuando el Ayuntamiento compra la edificación para su actual destino.
              </p>
              <p className="card-text space">
                El visitante podrá contemplar una armónica combinación entre la arquitectura vernácula (muros de mampostería, cubierta de tejas, decoración en cantería, suelos de madera, etc.), con las aportaciones de Laureano en las que se aprecia la influencia inglesa, francesa o suiza, tanto en la distribución de los espacios, con acertadas proporciones, en los detalles constructivos, en la simetría de su jardín y en la calidez de sus chimeneas.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-12">
          <div className="col-md-6">
            <div className="card-body" id="box-nazan">
              <h5 className="card-title">Premio al museo europeo</h5>
              <p className="card-text textItalic">
                ARTEM recibió una mención especial en los "Premios al Museo
                Europeo del año 2022"
              </p>
              <p className="card-text">
                Un total de 27 museos y espacios expositivos han pasado la criba final y se han convertido en los nominados oficiales al EMYA (museo europeo del año en sus siglas en inglés) de 2021. Este reconocimiento se circunscribe a aquellas instituciones que hayan puesto en marcha un nueva dinamización de sus salas y/o colección así como a aquellas que han abierto sus puertas durante el pasado año.</p>
              <p className="card-text">
                El organismo detrás de esta iniciativa es European Museum Forum, una organización creada en 1977 bajo el paraguas del Consejo de Europa cuyo objetivo es el de promover y reconocer a aquellos museos que están cambiando la forma de divulgar sus contenidos..
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src={ImageTwo}
              className="img-fluid rounded-start"
              alt="..."
            ></img>
          </div>
        </div>

        <div className="row g-12">
          <div className="col-md-6">
            <img
              src={ImageThree}
              className="img-fluid rounded-start"
              alt="..."
            ></img>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <img
                src="https://blogapi.uber.com/wp-content/uploads/2018/02/newsroom_mulher-917x516.png"
                className="rounded space"
                style={{ height: 187 }}
                alt="foto de Nazan Azeri"
              ></img>
              <h5 className="card-titleGray space">En conversación: Alí Kazma</h5>
              <p className="card-text textItalic space">
                Ali Kazma sobre las semillas que esperan el fin del mundo y el
                papel protector del arte.
              </p>
              <p className="card-text space">
                “En la escuela era muy mal alumno, tenía una letra tremenda, no respetaba los renglones. Después, cuando me cambiaron de institución, empecé a funcionar mejor.”
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
