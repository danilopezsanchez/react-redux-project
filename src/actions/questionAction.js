export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const ADD_NEW_QUESTION = "ADD_NEW_QUESTION";

export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions,
	}
}

export function answerQuestion(question) {
	return {
		type: RECEIVE_QUESTIONS,
		question
	}
}

export function addNewQuestion(question) {
	return {
		type: ADD_NEW_QUESTION,
		question
	}
}