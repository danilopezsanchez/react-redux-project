import { RECEIVE_QUESTIONS, ANSWER_QUESTION, ADD_NEW_QUESTION } from "../actions/questionAction";

const dashboardReducer = (state={}, action) => {
	switch(action.type){
		case RECEIVE_QUESTIONS:
			return{
				...state,
				...action.questions,
			};
		case ANSWER_QUESTION:
			return{
				...state,
				...action.question
			};
		case ADD_NEW_QUESTION:
			return{
				...state,
				[action.question.id]: action.question
			};
		default:
			return state;
	}
}

export default dashboardReducer;