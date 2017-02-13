import {connect} from 'react-redux';
import Stations from '../components/Stations';

const mapStateToProps = (state, ownProps) => {
    return {
        genre: ownProps.params.genre,
        songs:
        currentSong, isPlaying, toggleOne
    } 
};

const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps, mapDispatchToProps)(Stations);
