import { combineReducers } from 'redux';

const selectedJot = (selectedJot = null, action) => {
	// switch(action.type){
	//     case
	// }

	if (action.type === 'JOT_SELECTED') {
		return action.payload;
	}

	return selectedJot;
};

export default combineReducers({
	selectedJot: selectedJot
});
