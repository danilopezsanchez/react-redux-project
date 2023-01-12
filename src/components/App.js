import Login from "./Login";
import Dashboard from "./Dashboard";
import NewPoll from "./NewPoll";
import PollDetail from "./PollDetail";
import Leaderboard from "./Leaderboard"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
	<div>
		<Routes>
			<Route path="/" exact element={<Dashboard />} />
			<Route path="/add" exact element={<NewPoll />} />
			<Route path="/questions/:question_id" exact element={<PollDetail />} />
			<Route path="leaderboard" exact element={<Leaderboard/>} />
		</Routes>
	</div>
  );
}

export default App;
