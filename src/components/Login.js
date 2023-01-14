
import choice from "../utils/images/choice.jpg";
import { _getUsers } from "../utils/_DATA";
import { loginUser } from "../actions/authUser";
import {useDispatch, useSelector} from "react-redux";
import NavigationBar from "./NavigationBar";

const Login = () => {
	const dispatch = useDispatch();
	const usersState = useSelector(state => state.users);	

	function handleLogin(){
		const userSelected = document.getElementById("loginBox").value;
		dispatch(loginUser(userSelected));
	}

	return(
		<div>
			<NavigationBar />
			<div className="loginContainer">
				<div>Employee Polls</div>
				<img src={choice} />
				<h1>Login:</h1>
				<select id="loginBox">
					<option value="none">None</option>
					{Object.values(usersState).map((item) => {
						return <option key={item.id} value={item.id}>{item.name}</option>;
					})}
				</select>
				<button onClick={handleLogin}>Login</button>
			</div>
		</div>
	)
}

export default Login;