import NavigationBar from "./NavigationBar";
import { useSelector } from "react-redux";

const Leaderboard = () => {
	const usersState = useSelector(state => state.users);

	console.log(usersState);

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
					<div className="col">Users</div>
					<div className="col">Answered</div>
					<div className="col">Created</div>
				</header>
				{
					usersOrdered.map((item) => {
						return (
							<div key={item.id} className="row">
								<div className="col">
									<img src={item.avatarURL} width="50px"/>
									{item.name}
								</div>
								<div className="col">{Object.values(item.answers).length}</div>
								<div className="col">{item.questions.length}</div>
							</div>
						);
					})
				}
			</div>
		</div>
	)
}

export default Leaderboard;