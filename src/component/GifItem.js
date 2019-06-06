import React from 'react';
import GifPlayer from 'react-gif-player';

const GifItem = (image) => {
    console.log(image);
   return (
    <div className="img-wrapper">
    <div className="inner ">
      <GifPlayer className="responsive-img" gif={image.gif} still={image.still}/>
    </div>
     
  </div>
     
  )
};

export default GifItem;