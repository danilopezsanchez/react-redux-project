
import { useEffect } from "react";
import choice from "../utils/images/choice.jpg";
import { _getUsers } from "../utils/_DATA";
import { receiveUsers } from "../actions/usersAction";
import { loginUser } from "../actions/authUser";
import {useDispatch, useSelector} from "react-redux";

const Login = () => {
	const dispatch = useDispatch();
	const usersState = useSelector(state => state.users);
	const allState = useSelector(state => state);

	useEffect(() => {
		_getUsers().then((users)=>{
			dispatch(receiveUsers(users));
		})
	},[]);


	useEffect(() => {
		console.log("Cambioooo:", allState);
	},[allState])

	function handleLogin(event){
		console.log(document.getElementById("loginBox").value);
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
					return <option value={item.id}>{item.name}</option>;
				})}
			</select>
			<button onClick={handleLogin}>Login</button>
		</div>
	)
}

export default Login;