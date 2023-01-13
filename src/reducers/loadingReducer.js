import { SHOW_LOADING, HIDE_LOADING } from "../actions/loadingAction";


const loadingReducer = (state=false, action) => {
	switch(action.type){
		case SHOW_LOADING:
			return true;
		case HIDE_LOADING:
			return false;
		default:
			return state;
	}
}

export default loadingReducer;