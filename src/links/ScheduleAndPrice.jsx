import React from 'react';
import "./ScheduleAndPrice.css";
import MapScheduleAndPrice from './components/MapScheduleAndPrice';

import IconTime from '../images/icon-time.svg';
import IconTickets from '../images/icon-tickets.svg';

const ScheduleAndPrice = () => {
  const schedules = [
    {
      id: 1,
      title: "Lunes",
      text: "CERRADO"
    }, {
      id: 2,
      title: "Martes",
      text: "10:00–18:00"
    }, {
      id: 3,
      title: "Miércoles",
      text: "10:00–20:00"
    }, {
      id: 4,
      title: "Jueves",
      text: "10:00–18:00"
    }, {
      id: 5,
      title: "Viernes",
      text: "10:00–18:00"
    }, {
      id: 6,
      title: "Sábado",
      text: "10:00–17:00"
    }, {
      id: 7,
      title: "Domingo",
      text: "10:00–14:00"
    }
  ];


  const free = [
    {
      id: 1,
      title: "Martes",
      text: "16:00 - 18:00"
    }, {
      id: 2,
      title: "Miércoles",
      text: "18:00 - 20:00"
    }, {
      id: 3,
      title: "Domingo",
      text: "12:00–14:00"
    }, {
      id: 4,
      title: "Festivos",
      text: "18 de abril, 16 y 17 de mayo y 6 de diciembre"
    }
  ];

  const prices = [
    {
      id: 1,
      title: "Entrada individual general",
      text: "Taquillas / Online: 10 €"
    }, {
      id: 2,
      title: "Entrada individual general válida para dos visitas",
      text: "Taquillas / Online: 15 €"
    }, {
      id: 3,
      title: "Tarjeta Anual de Museos Estatales",
      text: "Taquillas: 36,06 €"
    }, {
      id: 4,
      title: "Entrada individual gratuita",
      text: "Menores de 18 años, mayores de 65 años y estudiantes entre 18 y 25 años "
    }, {
      id: 5,
      title: "Entrada individual reducida 50%",
      text: "50% para voluntarios culturales, miembros de familias numerosas, personal de museos no adscritos al Ministerio de Cultura y Deporte"
    }
  ];

  return (
    <div>
      <h1 className="title">Horarios y tarifas</h1>
      <div className="container">

        <div className="row">
          <div className="col">
            <img src={IconTime} className="icons" alt="Icono de un reloj" />
            <h3 className="subtitle">Horarios</h3>
            <h5 className="priceAndSche">Visita al museo</h5> <hr />
            <MapScheduleAndPrice key={schedules.title} schedulesAndPrices={schedules} />
            <h5 className="priceAndSche">Días gratuitos</h5> <hr />
            <MapScheduleAndPrice key={free.title} schedulesAndPrices={free} />
          </div>

          <div className="col">
            <img src={IconTickets} className="icons" alt="Icono de un reloj" />
            <h3 className="subtitle" >Tarifas</h3>
            <h5 className="priceAndSche">Precio de la entrada</h5> <hr />
            <MapScheduleAndPrice className="textHour" key={prices.title} schedulesAndPrices={prices} />
          </div>
        </div>

        <div className="card-bodyRed">
          <h4 className="subtitle">Días de cierre</h4>
          <p className="textHour">
            1 y 6 enero, 1 de mayo, 15 de mayo, 9 de noviembre, 24, 25 y 31 de diciembre <br />
            *Pueden verse modificados por aplicación del calendario laboral de la Comunidad de Canarias.
          </p>
        </div>

        <div className="card-body">
          <h4 className="subtitle">Avisos</h4>
          <p className="textHour">
            El horario de la taquilla finaliza 30 minutos antes de la hora de cierre. <br />

            En domingo la venta de entradas finaliza a las 13:30 h, salvo venta anticipada. <br />

            Se ruega a los visitantes que desalojen las salas 15 minutos antes del cierre, en todas las sedes.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ScheduleAndPrice;