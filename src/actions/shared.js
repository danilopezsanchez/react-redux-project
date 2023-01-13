import { _getQuestions, _getUsers } from "../utils/_DATA";
import { receiveQuestions } from "../actions/questionAction";
import { receiveUsers } from "../actions/usersAction";
import { showLoading, hideLoading } from "./loadingAction";

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
