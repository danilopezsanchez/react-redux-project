import { useState } from "react";
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
	const [visualizePolls, setVisualizePolls] = useState("new");

	let questionsAnswered = Object.values(questionsState).filter((item)=>{
		if(item.optionOne.votes.includes(authedUser) || item.optionTwo.votes.includes(authedUser))
			return item;
	})
	questionsAnswered.sort(function(a,b){return b.timestamp-a.timestamp})

	let questionsNotAnswered = Object.values(questionsState).filter((item)=>{
		if(!item.optionOne.votes.includes(authedUser) && !item.optionTwo.votes.includes(authedUser))
			return item;
	})
	questionsNotAnswered.sort(function(a,b){return b.timestamp-a.timestamp})
	

	function formatDate(time) {
		const dateFormat= new Date(time);
		const dateFormated = dateFormat.getDate()+
		"/"+(dateFormat.getMonth()+1)+
		"/"+dateFormat.getFullYear()+
		" "+dateFormat.getHours()+
		":"+dateFormat.getMinutes();
		return dateFormated;
	}

	function handleVisualizeOption(){
		const visualizationSelected = document.getElementById("visualizationBox").value;
		setVisualizePolls(visualizationSelected)
	}

	return(
		<div>
			<NavigationBar/>
			<div className="selectVisualization">
				<div>Select what you want to visualize:</div>
				<select id="visualizationBox" value={visualizePolls} onChange={handleVisualizeOption}>
					<option value="all">All</option>
					<option value="new">New</option>
					<option value="done">Done</option>
				</select>
			</div>
			{
			(visualizePolls==="all" || visualizePolls==="new") && 
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
			}
			{
			(visualizePolls==="all" || visualizePolls==="done") && 
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
			}
		</div>
	)
}

export default Dashboard;