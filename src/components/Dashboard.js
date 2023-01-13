import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { receiveQuestions } from "../actions/questionAction";
import { _getQuestions } from "../utils/_DATA";
import Login from "./Login";
import NavigationBar from "./NavigationBar";

const Dashboard = () => {
	const dispatch = useDispatch();
	const authedUser = useSelector(state => state.authedUser);
	const questionsState = useSelector(state => state.questions);

	const questionsAnswered = Object.values(questionsState).filter((item)=>{
		if(item.optionOne.votes.includes(authedUser) || item.optionTwo.votes.includes(authedUser))
			return item;
	})

	const questionsNotAnswered = Object.values(questionsState).filter((item)=>{
		if(!item.optionOne.votes.includes(authedUser) && !item.optionTwo.votes.includes(authedUser))
			return item;
	})

	function formatDate(time) {
		const dateFormat= new Date(time);
		const dateFormated = dateFormat.getDate()+
		"/"+(dateFormat.getMonth()+1)+
		"/"+dateFormat.getFullYear()+
		" "+dateFormat.getHours()+
		":"+dateFormat.getMinutes();
		return dateFormated;
	}

	return(
		<div>
			<NavigationBar/>
			<section className="pollSectionContainer">
				<h1>New questions</h1>
				<div className="pollListContainer">
				{
					questionsNotAnswered && questionsNotAnswered.map((question) => {
						return (
							<div key={question.id} className="pollContainerDetail">
								<div>{question.author}</div>
								<div>{formatDate(question.timestamp)}</div>
								<Link to={`/questions/${question.id}`}><button>View</button></Link>
							</div>
						)
					})
				}
				{
					questionsNotAnswered.length===0 && <div>No polls to answer</div>
				}
				</div>
			</section>
			<section className="pollSectionContainer">
				<h1>Done</h1>
				<div className="pollListContainer">
				{
					questionsAnswered && questionsAnswered.map((question) => {
						return (
							<div key={question.id} className="pollContainerDetail">
								<div>{question.author}</div>
								<div>{formatDate(question.timestamp)}</div>
								<Link to={`/questions/${question.id}`}><button>View</button></Link>
							</div>
						)
					})
				}
				{
					questionsAnswered.length===0 && <div>No polls answered</div>
				}
				</div>
			</section>
		</div>
	)
}

export default Dashboard;