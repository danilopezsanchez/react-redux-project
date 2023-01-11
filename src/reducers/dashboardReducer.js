import { RECEIVE_QUESTIONS } from "../actions/questionAction";

const dashboardReducer = (state={}, action) => {
	switch(action.type){
		case RECEIVE_QUESTIONS:
			return{
				...state,
				...action.questions,
			};
		default:
			return state;
	}
}

export default dashboardReducer;