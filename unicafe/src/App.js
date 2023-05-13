import { useState } from 'react'

const FeedbackButton = ({title, handler}) => {
	return (
		<button onClick={handler}>{title}</button>
	)
}

const Display = ({title, value}) => {
	return (
		<tr>
			<td>{title}</td>
			<td>{value}</td>
		</tr>
	)
}

const Statistics = ({good, bad, neutral}) => {

	const calculateAverage = (good, neutral, bad) => ((good - bad) / (good + neutral + bad))
	const calculateGoodPct = (good, neutral, bad) => (good / (good + neutral + bad))

	if ((good + neutral + bad) > 0) {
		return <>
		<h1 >statistics</h1>
		<table>
			<Display title='good' value={good}/>
			<Display title='neutral' value={neutral}/>
			<Display title='bad' value={bad}/>
			<Display title='all' value={good + neutral + bad}/>
			<Display title='average' value={calculateAverage(good, neutral, bad)}/>
			<Display title='goodPct' value={calculateGoodPct(good, neutral, bad)}/>
		</table>

		</>
	} else {
		return <>
			<h1 >statistics</h1>
			<p>no feedback given</p>
		</>
	}

}

const App = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const IncreaseGood = () => {
		setGood(good + 1);
	}
	const IncreaseNeutral = () => {
		setNeutral(neutral + 1);
	}
	const IncreaseBad = () => {
		setBad(bad + 1);
	}

  return (
    <div>
		<h1 >give feedback</h1>
		<FeedbackButton title = 'good' handler = {IncreaseGood}/>
		<FeedbackButton title = 'neutral' handler = {IncreaseNeutral}/>
		<FeedbackButton title = 'bad' handler = {IncreaseBad}/>
		<Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App
