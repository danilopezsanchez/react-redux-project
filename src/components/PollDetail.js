import { useDispatch, useSelector } from "react-redux";

const PollDetail = () => {
	return(
		<div className="pollDetailContainer">
			<h1>Poll by <span>name</span></h1>
			<img className="imgAvatar" src="https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664_640.jpg" alt="avatar" />
			<div>
				<h2>Would you rather</h2>
				<div className="answerOptions">
					<div className="option">
						<div>Option 1 text</div>
						<button>Click</button>
					</div>

					<div className="option">
						<div>Option 2 text Option 2 text Option 2 text Option 2 text Option 2 text Option 2 text Option 2 text Option 2 text Option 2 text</div>
						<button>Click</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PollDetail;