import { useState } from 'react'

const FeedbackButton = ({title, handler}) => {
	return (
		<button onClick={handler}>{title}</button>
	)
}

const Display = ({title, count}) => {
	return <p>{title} {count}</p>
}

const App = () => {
	// save clicks of each button to its own state
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
		<h1 >statistics</h1>
		<Display title='good' count={good}/>
		<Display title='neutral' count={neutral}/>
		<Display title='bad' count={bad}/>
    </div>
  )
}

export default App
