
import { useEffect } from "react";
import choice from "../utils/images/choice.jpg";
import { _getUsers } from "../utils/_DATA";
import { loginUser } from "../actions/authUser";
import {useDispatch, useSelector} from "react-redux";

const Login = () => {
	const dispatch = useDispatch();
	const usersState = useSelector(state => state.users);	

	/*useEffect(() => {
		_getUsers().then((users)=>{
			dispatch(receiveUsers(users));
		})
	},[]);*/

	function handleLogin(event){
		const userSelected = document.getElementById("loginBox").value;
		dispatch(loginUser(userSelected));
	}

	return(
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
	)
}

export default Login;