import { useState } from 'react'

const FeedbackButton = ({title, handler}) => {
	return (
		<button onClick={handler}>{title}</button>
	)
}

const Display = ({title, count}) => {
	if (isNaN(count)){
		return <p>{title} -</p>
	} else {
		return <p>{title} {count}</p>
	}
}

const Statistics = ({good, bad, neutral}) => {

	const calculateAverage = (good, neutral, bad) => {
		return (((good * 1) + (bad * -1)) / (good + neutral + bad))
	}

	const calculateGoodPct = (good, neutral, bad) => {
		return ((good) / (good + neutral + bad))
	}

	if ((good + neutral + bad) > 0) {
		return <>
		<h1 >statistics</h1>
			<Display title='good' count={good}/>
			<Display title='neutral' count={neutral}/>
			<Display title='bad' count={bad}/>
			<Display title='all' count={good + neutral + bad}/>
			<Display title='average' count={calculateAverage(good, neutral, bad)}/>
			<Display title='goodPct' count={calculateGoodPct(good, neutral, bad)}/>
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
