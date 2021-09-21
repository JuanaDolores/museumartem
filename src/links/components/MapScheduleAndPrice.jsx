import React from 'react';
import PropScheduleAndPrice from "./PropScheduleAndPrice";

const MapScheduleAndPrice = (list) => {
    const listSchedulesAndPrices = list.schedulesAndPrices;
    return (
        <div>
            {listSchedulesAndPrices.map((schedulesAndPrices) => {
                return (
                    <PropScheduleAndPrice key={schedulesAndPrices.title} schedulesAndPrices={schedulesAndPrices} />
                );
            })}
        </div>
    );
};

export default MapScheduleAndPrice;