import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const NavigationBar = () => {
	const authedUser = useSelector(state => state.authedUser);

	return(
		<nav className="navigationBar">
			<div className="linkNavegation">
				<Link to="/">Home</Link>
				<Link to="/leaderboard">Leaderboard</Link>
				<Link to="/add">New</Link>
			</div>
			<div className="loginNavegation">
				<div>{authedUser}</div>
				<a>Logout</a>
			</div>
		</nav>
	)
}

export default NavigationBar;