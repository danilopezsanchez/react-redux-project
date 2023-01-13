export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export function loginUser(userLogged){
	return{
		type: LOGIN_USER,
		userLogged,
	}
}

export function logoutUser(){
	return{
		type: LOGOUT_USER,
	}
}