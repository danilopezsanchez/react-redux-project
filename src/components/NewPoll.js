import NavigationBar from "./NavigationBar";
import { useDispatch, useSelector } from "react-redux";

const NewPoll = () => {
	const authedUser = useSelector(state => state.authedUser);
	const questionsState = useSelector(state => state.questions);
	const usersState = useSelector(state => state.users);

	function handleSubmit(e){
		e.preventDefault();
		const option1=document.getElementById("option1").value;
		const option2=document.getElementById("option2").value;
		console.log(option1 +" y "+option2);
	}

	return(
		<div>
			<NavigationBar />
		<div className="newPollContainer">
			<h1>Would you rather?</h1>
			<h2>Create your own poll</h2>
			<form onSubmit={handleSubmit}>
				<input id="option1" type="text" placeholder="Option 1" required />
				<input id="option2" type="text" placeholder="Option 2" required />
				<button>Submit</button>
			</form>
		</div>
		</div>
	)
}

export default NewPoll;