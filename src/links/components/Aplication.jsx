import React from 'react';
import Artwork from "./Artwork";

const Aplication = (list) => {
    const listArtworks = list.artworks;
    return (
        <div>
            {listArtworks.map((artwork) => {
                return (
                    <Artwork key={artwork.title} artwork={artwork} />
                );
            })}
        </div>
    );
};

export default Aplication;