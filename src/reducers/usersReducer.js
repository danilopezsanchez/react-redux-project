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
			console.log("estadooo",state)
			console.log("usuariooo", state[action.question.author])
			return{
				...state,
				[state[action.question.author]]: state[action.question.author].questions.push(action.question.id),
			};
		default:
			return state;
	}
}

export default usersReducer;