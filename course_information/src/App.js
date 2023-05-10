
function Header({course}) {
	console.log("Header", course)
	return (
		<>
			<h1>{course}</h1>
		</>
	)
}

const Part = ({part: {name, exercises}}) => {
	console.log("Part", name, exercises)
	return (
		<p>
		  {name} {exercises}
		</p>
	)
}

const Content = ({parts:[part1, part2, part3]}) => {
	console.log("Part", part1, part2, part3)
	return (
		<>
		<Part part = {part1} />
		<Part part = {part2} />
		<Part part = {part3} />
		</>
	)
}

const Total = (props) => {
	console.log("Total", props)

	let sum = 0
	props.parts.forEach(element => {
		sum += element.exercises
	});

	return (
		<>
		<p>Number of exercises {sum}</p>
		</>
	)
}

const App = () => {

	const course = {
		header: 'Half Stack application development',
		parts: [

			{
				name: 'Fundamentals of React',
				exercises: 10
			},
			{
				name: 'Using props to pass data',
				exercises: 7
			},
			{
				name: 'State of a component',
				exercises: 14
			}
		]
	}

	return (
	<div>
		<Header course = {course.header}/>
		<Content parts = {course.parts}/>
		<Total parts = {course.parts}/>
	</div>
	)
}

export default App
