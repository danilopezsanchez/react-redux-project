import { LOGIN_USER, LOGOUT_USER } from "../actions/authUser";

const authReducer = (state=null, action) => {
	console.log("action", action)
	switch(action.type){
		case LOGIN_USER:
			return action.userLogged;
		case LOGOUT_USER:
			return null;
		default:
			return state;
	}
}

export default authReducer;
