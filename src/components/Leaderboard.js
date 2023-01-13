import NavigationBar from "./NavigationBar";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";

const Leaderboard = () => {
	const authedUser = useSelector(state => state.authedUser);
	const usersState = useSelector(state => state.users);

	let usersOrdered = Object.values(usersState).map((user)=>{
		const counter = parseInt(user.questions.length) + parseInt(Object.values(user.answers).length)
		return {
			...user,
			count: counter
		}
	})

	function compare ( a, b ){
		return b.count - a.count;
	}
	usersOrdered.sort( compare );

	return(
		
		<div>
			<NavigationBar />
			<div className="leaderContainer">
				<header>
					<div class="col">Users</div>
					<div class="col">Answered</div>
					<div class="col">Created</div>
				</header>
				{
					usersOrdered.map((item) => {
						return (
							<div key={item.id} class="row">
								<div class="col">
									<img src={item.avatarURL} width="50px"/>
									{item.name}
								</div>
								<div class="col">{Object.values(item.answers).length}</div>
								<div class="col">{item.questions.length}</div>
							</div>
						);
					})
				}
			</div>
		</div>
	)
}

export default Leaderboard;