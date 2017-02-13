import {connect} from 'react-redux';
import Stations from '../components/Stations';

const convertSongsToStations = (songsArray) => {
    const stations = {};

    songsArray.forEach((song) => {
        if (!stations[song.genre]) stations[song.genre] = [song];
        else stations[song.genre].push(song);
    })

    return stations;
}

const mapStateToProps = state => {
    return {
        stations: convertSongsToStations(state.songs)
    } 
};

const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps, mapDispatchToProps)(Stations);
