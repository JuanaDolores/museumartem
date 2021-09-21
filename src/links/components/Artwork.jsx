import React from 'react';

const Artwork = (oneArtwork) => {
  const artwork = oneArtwork.artwork;
  return (
    <div>
      <h3>{artwork.title}</h3>
      <h3>{artwork.subtitle}</h3>
      <p>{artwork.text}</p>
    </div>
  );
};

export default Artwork;

