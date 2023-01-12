export const LOGIN_USER = "LOGIN_USER";

export function loginUser(userLogged){
	return{
		type: LOGIN_USER,
		userLogged,
	}
}