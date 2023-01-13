export const RECEIVE_USERS = "RECEIVE_USERS";
export const UPDATE_ANSWER = "UPDATE_ANSWER";
export const UPDATE_QUESTION= "UPDATE_QUESTION";

export function receiveUsers(users) {
	return {
		type: RECEIVE_USERS,
		users,
	}
}

export function updateUserAnswer(user) {
	return {
		type: UPDATE_ANSWER,
		user,
	}
}

export function updateUserQuestion(question) {
	return {
		type: UPDATE_QUESTION,
		question,
	}
}

