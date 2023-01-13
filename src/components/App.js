import Login from "./Login";
import Dashboard from "./Dashboard";
import NewPoll from "./NewPoll";
import PollDetail from "./PollDetail";
import Leaderboard from "./Leaderboard"
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInitialUser, getInitialQuestions } from "../actions/shared";
import Loading from "./Loading";


function App() {
	const dispatch = useDispatch();
	const authedUser = useSelector(state => state.authedUser);
	const isLoading = useSelector(state => state.loading);

	useEffect(() => {
		dispatch(getInitialUser());
		dispatch(getInitialQuestions());
	},[]);

  return (
		<div>
			{
				isLoading ? <Loading/> :
				(authedUser !== null ? 
				(
				<Routes>
					<Route path="/" exact element={<Dashboard />} />
					<Route path="/add" exact element={<NewPoll />} />
					<Route path="/questions/:question_id" exact element={<PollDetail />} />
					<Route path="leaderboard" exact element={<Leaderboard/>} />
				</Routes>
				) : <Login />)
			}
		</div>
  );
}

export default App;
