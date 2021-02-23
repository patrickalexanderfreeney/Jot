import React, { useContext } from 'react';
import { PostContext } from '../context/store';

function Jot({ jot }) {
	const [state] = useContext(PostContext);
	return <div>{state.currentJot.title}</div>;
}

export default Jot;
