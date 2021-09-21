import React from 'react';

const PropScheduleAndPrice = (hourAndPrice) => {
  const schedulesAndPrices = hourAndPrice.schedulesAndPrices;
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p className="titleHour">{schedulesAndPrices.title}</p>
        </div>

        <div className="col">
          <p className="textHour">{schedulesAndPrices.text}</p>
        </div>
      </div>
    </div>
  );
};

export default PropScheduleAndPrice;