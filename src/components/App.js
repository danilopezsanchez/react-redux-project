import Login from "./Login";
import Dashboard from "./Dashboard";
import NewPoll from "./NewPoll";
import PollDetail from "./PollDetail";
import Leaderboard from "./Leaderboard"
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { _getQuestions, _getUsers } from "../utils/_DATA";
import { receiveQuestions } from "../actions/questionAction";
import { receiveUsers } from "../actions/usersAction";

function App() {
	const dispatch = useDispatch();
	const authedUser = useSelector(state => state.authedUser);

	useEffect(() => {
		_getUsers().then((users)=>{
			dispatch(receiveUsers(users));
		});
		_getQuestions().then((questions)=>{
			dispatch(receiveQuestions(questions));
		});
	},[]);

	const storeApp = useSelector(state => state);

	console.log(storeApp)

  return (
		<div>
		{
			authedUser !== null ? 
			(
			<Routes>
				<Route path="/" exact element={<Dashboard />} />
				<Route path="/add" exact element={<NewPoll />} />
				<Route path="/questions/:question_id" exact element={<PollDetail />} />
				<Route path="leaderboard" exact element={<Leaderboard/>} />
			</Routes>
			) : <Login />
		}
	</div>
  );
}

export default App;
