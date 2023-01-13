import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT_USER } from "../actions/authUser";
import { logoutUser } from "../actions/authUser";
import { useNavigate } from 'react-router';

const NavigationBar = () => {
	const authedUser = useSelector(state => state.authedUser);
	const dispatch = useDispatch();
	const navigation = useNavigate();

	function handleLogout(){
		dispatch(logoutUser());
		navigation("/");
	}

	return(
		<nav className="navigationBar">
			<div className="linkNavegation">
				<Link to="/">Home</Link>
				<Link to="/leaderboard">Leaderboard</Link>
				<Link to="/add">New</Link>
			</div>
			<div className="loginNavegation">
				<div>{authedUser}</div>
				<a onClick={handleLogout}>Logout</a>
			</div>
		</nav>
	)
}

export default NavigationBar;