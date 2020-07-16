import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { PostContext } from './context/store';
import JotForm from './JotForm';
import Jot from './Jot';

function JotShowContainer({ jot }) {
	const [state, dispatch] = useContext(PostContext);
	if (!jot) {
		return <div>Select a jot!</div>;
	}
	return state.currentJot ? <Jot jot={state.currentJot} /> : <JotForm />;
}
const mapStateToProps = (state) => {
	return { song: state.selectedSong };
};
export default connect()(JotShowContainer);
