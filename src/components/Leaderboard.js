import NavigationBar from "./NavigationBar";
import { useDispatch, useSelector } from "react-redux";

const Leaderboard = () => {
	const authedUser = useSelector(state => state.authedUser);
	console.log(authedUser)
	return(
		<div>
			<NavigationBar />
			<div className="leaderContainer">
				<header>
					<div class="col">Users</div>
					<div class="col">Answered</div>
					<div class="col">Created</div>
				</header>
				<div class="row">
					<div class="col">Jhon</div>
					<div class="col">2</div>
					<div class="col">3</div>
				</div>
				<div class="row">
					<div class="col">Marie</div>
					<div class="col">1</div>
					<div class="col">1</div>
				</div>
			</div>
		</div>
	)
}

export default Leaderboard;