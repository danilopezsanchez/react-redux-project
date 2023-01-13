import { RECEIVE_USERS, UPDATE_ANSWER } from "../actions/usersAction";


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
		default:
			return state;
	}
}

export default usersReducer;