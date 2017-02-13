// Station.js
import React from 'react';
import Songs from './Songs';

/** Needs:
 * genre 
 * songs
 * currentSong, isPlaying, toggleOne
 */

const DUMMY_GENRE_NAME = 'Jazz';
const DUMMY_SONGS = [{
  id: 1,
  name: "A Love Supreme",
  genre: "Jazz",
  artists: [{ name: "John Coltrane" }]
}];
const DUMMY_CURRENT_SONG = {};
const DUMMY_IS_PLAYING = false;
const DUMMY_TOGGLE_ONE = function () {};

export default function (props) {
  return (
    <div>
      <h3>{props.params.genre}</h3>
      <Songs 
        songs={DUMMY_SONGS} 
        currentSong={DUMMY_CURRENT_SONG} 
        isPlaying={DUMMY_IS_PLAYING} 
        toggleOne={DUMMY_TOGGLE_ONE}
      />
    </div>
  );
}