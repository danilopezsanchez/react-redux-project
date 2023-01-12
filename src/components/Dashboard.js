import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { receiveQuestions } from "../actions/questionAction";
import { _getQuestions } from "../utils/_DATA";

const Dashboard = () => {
	const dispatch = useDispatch();
	const questionsState = useSelector(state => state.questions);
	console.log(questionsState);
	useEffect(() => {
		_getQuestions().then((questions)=>{
			dispatch(receiveQuestions(questions));
		})
	},[dispatch]);

	function formatDate(time){
		const dateFormat= new Date(time);
		const dateFormated = dateFormat.getDate()+
		"/"+(dateFormat.getMonth()+1)+
		"/"+dateFormat.getFullYear()+
		" "+dateFormat.getHours()+
		":"+dateFormat.getMinutes()
		return dateFormated;
	}

	return(
		<div>
			<nav className="navigationBar">
				<div className="linkNavegation">
					<a>Home</a>
					<a>Leaderboard</a>
					<a>New</a>
				</div>
				<div className="loginNavegation">
					<div>Name</div>
					<a>Logout</a>
				</div>
			</nav>
			<section className="pollSectionContainer">
				<h1>New questions</h1>
				<div className="pollListContainer">
				{
					questionsState && Object.values(questionsState).map((question) => {
						console.log("hiii:", question)
						return (
							<div className="pollContainerDetail">
							<div>{question.author}</div>
							<div>{formatDate(question.timestamp)}</div>
							<button>View</button>
					</div>
						)
					})
				}
				</div>
			</section>
			<section className="pollSectionContainer">
				<h1>Done</h1>
				<div className="pollListContainer">
					<div className="pollContainerDetail">
						<div>Person</div>
						<div>Date</div>
						<button>View</button>
					</div>
					<div className="pollContainerDetail">
						<div>Person</div>
						<div>Date</div>
						<button>View</button>
					</div>
					<div className="pollContainerDetail">
						<div>Person</div>
						<div>Date</div>
						<button>View</button>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Dashboard;