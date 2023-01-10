const NewPoll = () => {
	return(
		<div className="newPollContainer">
			<h1>Would you rather?</h1>
			<h2>Create your own poll</h2>
			<form>
				<input type="text" placeholder="Option 1" required />
				<input type="text" placeholder="Option 2" required />
				<button>Submit</button>
			</form>
		</div>
	)
}

export default NewPoll;