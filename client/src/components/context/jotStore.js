import React, { createContext, useReducer } from 'react';

export const jotContext = createContext({});

const initialState = {
	jots: [],
	currentJot: null
};

function reducer(state, action) {
	switch (action.type) {
		case 'SETJOTS':
			return {
				...state,
				jots: action.payload
			};
		case 'ADDJOT':
			return {
				...state,
				jots: [action.payload, ...state.jots]
			};
		case 'RESETJOTS':
			return {
				...state,
				jots: action.payload
			};

		case 'READJOT':
			return {
				...state,
				currentJot: action.payload
			};

		case 'DELETEJOT':
			return {
				...state,
				jots: state.jots.filter((jot) => jot.id !== action.jotId)
			};
		case 'FILTERJOTS':
			return {
				...state,
				jots: state.jots.filter((jot) => {
					return (
						jot.tags.toLowerCase().includes(action.payload.toLowerCase()) ||
						jot.title.toLowerCase().includes(action.payload.toLowerCase())
					);
				})
			};

		default:
			return state;
	}
}

const JotStore = ({ children })=> {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<jotContext.Provider value={[state, dispatch]}>
			{children}
		</jotContext.Provider>
	);
};

export default JotStore;
