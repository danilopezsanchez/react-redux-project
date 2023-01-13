import ghost from "../utils/images/ghost.gif";

const NotFound = () => {
	return (
		<div className="notfoundContainer">
			<h1>The page your are looking for doesn't exist</h1>
			<h2>Maybe the ghostbusters can help</h2>
			<img src={ghost} />
		</div>
	)
}

export default NotFound;