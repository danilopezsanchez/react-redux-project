import { useDispatch, useSelector } from "react-redux";
import NavigationBar from "./NavigationBar";
import { useParams } from "react-router-dom";
import { answerQuestion } from "../actions/questionAction"; 
import { updateUserAnswer } from "../actions/usersAction";
import { saveAnswerToServer } from "../actions/shared";

const PollDetail = () => {
	let params = useParams();
	const qid = params.question_id;
	const questionsState = useSelector(state => state.questions);
	const authedUser = useSelector(state => state.authedUser);
	const usersState = useSelector(state => state.users);
	const dispatch = useDispatch();

	let questionDetail = questionsState[qid];
	const avatar = usersState[questionDetail.author].avatarURL;
	const questionAnswered = questionDetail.optionOne.votes.includes(authedUser) || questionDetail.optionTwo.votes.includes(authedUser);

	let userDetail = usersState[authedUser];

	function handleClickOption(optionSelected){
		questionDetail[optionSelected].votes.push(authedUser);
		userDetail.answers[qid] = optionSelected;

		const answer = optionSelected;

		dispatch(saveAnswerToServer({authedUser, qid, answer}));		
		dispatch(answerQuestion(questionDetail));
		dispatch(updateUserAnswer(userDetail));
	}
	
	return(
		<div>
			<NavigationBar/>
			<div className="pollDetailContainer">
				<h1>Poll by <span>{questionDetail.author}</span></h1>
				<img className="imgAvatar" src={avatar} alt="avatar" />
				<div>
					<h2>Would you rather</h2>
					<div className="answerOptions">
						<div className="option">
							<div>{questionDetail.optionOne.text}</div>
							{
								!questionAnswered && <button onClick={()=>{handleClickOption("optionOne")}}>Click</button> 
							}
							{
								questionDetail.optionOne.votes.includes(authedUser) && <div class="optionSelected">Option selected!</div>
							}
							{
								questionAnswered && <div class="optionVotes">Votes: {questionDetail.optionOne.votes.length}</div>
							}
						</div>

						<div className="option">
							<div>{questionDetail.optionTwo.text}</div>
							{
								!questionAnswered && <button onClick={()=>{handleClickOption("optionTwo")}}>Click</button>
							}
							{
								questionDetail.optionTwo.votes.includes(authedUser) && <div class="optionSelected">Option selected!</div>
							}
							{
								questionAnswered && <div class="optionVotes">Votes: {questionDetail.optionTwo.votes.length}</div>
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PollDetail;