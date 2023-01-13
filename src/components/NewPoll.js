import NavigationBar from "./NavigationBar";
import { useDispatch, useSelector } from "react-redux";

const NewPoll = () => {
	const authedUser = useSelector(state => state.authedUser);

	return(
		<div>
			<NavigationBar />
		<div className="newPollContainer">
			<h1>Would you rather?</h1>
			<h2>Create your own poll</h2>
			<form>
				<input type="text" placeholder="Option 1" required />
				<input type="text" placeholder="Option 2" required />
				<button>Submit</button>
			</form>
		</div>
		</div>
	)
}

export default NewPoll;