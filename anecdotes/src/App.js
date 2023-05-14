import { useState } from 'react'

const Button = (props) => {
	return (
		<button onClick={props.handler}>{props.title}</button>
	)
}

const Votes = ({votesCount}) => {
	return (
		<p>has {votesCount} votes</p>
	)
}

const MostPopularAnecdote = ({anecdote}) => {
	return (
		<>
			<h1>Anecdote with most votes</h1>
			<p>{anecdote}</p>
		</>
	)
}

const App = () => {
	const anecdotes = [
		'If it hurts, do it more often.',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
		'The only way to go fast, is to go well.'
	]

	const [selected, setSelected] = useState(0)
	const [votesArr, setVotesArr] = useState(Array(anecdotes.length - 1).fill(0))

	const getRandomInt = (max) => Math.floor(Math.random() * max)
	const randomAnecdote = () => setSelected(getRandomInt(anecdotes.length - 1))

	const updateVotes = () => {
		let arr = [...votesArr]
		arr[selected] += 1
		return (setVotesArr(arr))
	}

	const findMostVotes = () => {
		return anecdotes[votesArr.indexOf(Math.max(...votesArr))]
	}

	return (
	<>
		{anecdotes[selected]}
		<br/>
		<Button handler = {updateVotes} title = 'vote'/>
		<Button handler = {randomAnecdote} title = 'next anecdote'/>
		<br/>
		<Votes votesCount={votesArr[selected]}/>
		<MostPopularAnecdote anecdote={findMostVotes()}/>
	</>
	)
}

export default App
