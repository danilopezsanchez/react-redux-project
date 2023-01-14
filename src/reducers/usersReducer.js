import { RECEIVE_USERS, UPDATE_ANSWER, UPDATE_QUESTION } from "../actions/usersAction";


const usersReducer = (state={}, action) => {
	switch(action.type){
		case RECEIVE_USERS:
			return{
				...state,
				...action.users,
			};
		case UPDATE_ANSWER:
			return{
				...state,
				[action.user.id]: action.user,
			};
		case UPDATE_QUESTION:
			let userNewQuestion = state[action.question.author];
			userNewQuestion.questions.push(action.question.id);
			return{
				...state,
				[userNewQuestion.id]: userNewQuestion,
			};
		default:
			return state;
	}
}

export default usersReducer;