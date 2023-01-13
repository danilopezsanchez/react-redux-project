import { _getQuestions, _getUsers } from "../utils/_DATA";
import { receiveQuestions } from "../actions/questionAction";
import { receiveUsers } from "../actions/usersAction";
import { showLoading, hideLoading } from "./loadingAction";

import { _saveQuestion } from "../utils/_DATA";
import { addNewQuestion } from "../actions/questionAction";
import { updateUserQuestion } from "../actions/usersAction";

export function getInitialUser(){

	return (dispatch) => {
		dispatch(showLoading());
		return _getUsers().then((users)=>{
			dispatch(receiveUsers(users));
		}).then(()=>{dispatch(hideLoading())})
		
	}
}

export function getInitialQuestions(){
	return (dispatch) => {
		dispatch(showLoading());
		return _getQuestions().then((questions)=>{
			dispatch(receiveQuestions(questions));
		}).then(()=>{dispatch(hideLoading())})
	}
}

export function saveQuestionToServer(questionObj){
	return (dispatch) => {
		dispatch(showLoading());
		return _saveQuestion(questionObj).then((question)=>{
			dispatch(addNewQuestion(question));
			dispatch(updateUserQuestion(question));
		}).then(()=>{dispatch(hideLoading())})
	}
}
