import React, { useContext } from 'react';
import { PostContext } from './context/store';

function Jot() {
	const [state, dispatch] = useContext(PostContext);
	return <div>{state.jots.Title}</div>;
}

export default Jot;
