import { useDispatch, useSelector } from "react-redux";
import NavigationBar from "./NavigationBar";
import { useParams, useLocation } from "react-router-dom";
import { answerQuestion } from "../actions/questionAction"; 

const PollDetail = () => {
	let params = useParams();
	const question_id = params.question_id;
	const questionsState = useSelector(state => state.questions);
	const authedUser = useSelector(state => state.authedUser);
	const usersState = useSelector(state => state.users);
	const dispatch = useDispatch();

	let questionDetail = questionsState[question_id];
	const avatar = usersState[questionDetail.author].avatarURL;
	const questionAnswered = questionDetail.optionOne.votes.includes(authedUser) || questionDetail.optionTwo.votes.includes(authedUser)
	console.log(questionsState[question_id])

	function handleClickOption(optionSelected){
		if(optionSelected===1){
			questionDetail.optionOne.votes.push(authedUser)
		}else{
			questionDetail.optionTwo.votes.push(authedUser)
		}
		console.log(questionDetail);
		dispatch(answerQuestion(questionDetail));
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
								!questionAnswered && <button onClick={()=>{handleClickOption(1)}}>Click</button> 
							}
							{
								questionDetail.optionOne.votes.includes(authedUser) && <div class="optionSelected">Option selected!</div>
							}
						</div>

						<div className="option">
							<div>{questionDetail.optionTwo.text}</div>
							{
								!questionAnswered && <button onClick={()=>{handleClickOption(2)}}>Click</button>
							}
							{
								questionDetail.optionTwo.votes.includes(authedUser) && <div class="optionSelected">Option selected!</div>
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PollDetail;