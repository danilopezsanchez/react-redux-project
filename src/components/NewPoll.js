import NavigationBar from "./NavigationBar";
import { useDispatch, useSelector } from "react-redux";
import { saveQuestionToServer } from "../actions/shared";

const NewPoll = () => {
	const authedUser = useSelector(state => state.authedUser);
	const dispatch = useDispatch();

	function handleSubmit(e){
		e.preventDefault();
		const option1=document.getElementById("option1").value;
		const option2=document.getElementById("option2").value;
		
		
		const timestamp = Math.floor(Date.now());

		const questionObj = {
			author: authedUser,
			optionOneText: option1, 
			optionTwoText: option2
		}

		dispatch(saveQuestionToServer(questionObj));
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