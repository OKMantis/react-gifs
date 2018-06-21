import React from 'react';
import Gif from './gif';


// Destructuring
// On line 8 I replaced "props" by exploding props
// in the variables it contains which in this case
// are "gifs" and "selectGif".
// this way I don't have to use props anymore on line 15.

const GifList = ({ gifs, selectGif }) => {
  return (
    <div className="gif-list">
      {gifs.map(({ id }) => <Gif id={id} key={id} selectGif={selectGif} />)}
    </div>
  );
};

export default GifList;

// Map over an array of props
// Pass props to children
// React needs a unique key by child 