import React, { Component } from 'react';
import GifItem from './GifItem';

class GifList extends Component {
  constructor(props) {
    super(props);
    }

  render() { 
    const gifItems = this.props.gifs.map((image) => {
        return <GifItem key={image.id} gif={image.images.original.url} still={image.images.original_still.url}/>
    })
    
    return ( <div >{gifItems}</div> );
  }
}
 
export default GifList;
