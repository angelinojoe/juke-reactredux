import {connect} from 'react-redux';
import Station from '../components/Station';
import {convertSong} from '../utils';
import {toggleSong} from '../action-creators/player';

const convertToSongList = (songList, genre) => {
    return songList
                .filter((song) => song.genre === genre)
                .map(convertSong);
};

const mapStateToProps = (state, ownProps) => {
    return {
        genre: ownProps.params.genreName,
        songs: convertToSongList(state.songs, ownProps.params.genreName),
        currentSong: state.player.currentSong,
        isPlaying: state.player.isPlaying,
        //toggleOne: state.player.toggleOne
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleOne: function(song, list) {
            dispatch(toggleSong(song, list));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Station);
