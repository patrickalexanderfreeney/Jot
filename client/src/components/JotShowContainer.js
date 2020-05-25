import React from 'react';
import ReadJot from './ReadJot';

function JotShowContainer() {
	return state.showPost ? (
		<ReadJot />
	) : (
		<Redirect to={{ pathname: '/login', state: { referer: props.location } }} />
	);
}

export default JotShowContainer;
