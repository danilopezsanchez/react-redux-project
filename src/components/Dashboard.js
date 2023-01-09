const Dashboard = () => {

	return(
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
	)
}

export default Dashboard;