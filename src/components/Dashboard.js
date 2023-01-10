const Dashboard = () => {

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