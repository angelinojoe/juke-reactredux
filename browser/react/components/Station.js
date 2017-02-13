// Station.js
import React from 'react';
import Songs from './Songs';

/** Needs:
 * genre
 * songs
 * currentSong, isPlaying, toggleOne
 */


export default function (props) {
  console.log('station props: ', props);
  return (
    <div>
      <h3>{props.params.genre}</h3>
      <Songs
        songs={props.songs}
        currentSong={props.currentSong}
        isPlaying={props.isPlaying}
        toggleOne={props.toggleOne}
      />
    </div>
  );
}
