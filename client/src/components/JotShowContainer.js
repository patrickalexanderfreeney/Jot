import React, { useContext } from 'react';
import { PostContext } from './context/store';
import JotForm from './JotForm';
import Jot from './Jot';

function JotShowContainer() {
	const [state, dispatch] = useContext(PostContext);

	return state.currentJot ? <Jot jot={state.currentJot} /> : <JotForm />;
}

export default JotShowContainer;
