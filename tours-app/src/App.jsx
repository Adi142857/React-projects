import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
	const [tours, setTours] = useState([])
	const [loading, setLoading] = useState(true)

	async function fetchTours() {
		// set loading to true here
        setLoading(true)

		const data = await fetch(url)
		const jsonData = await data.json()
		setTours(jsonData)

		setLoading(false)
		// set loading to false here
	}

	useEffect(() => {
		fetchTours()
	}, [])

	if (loading) {
		return (
			<main>
				<Loading />
			</main>
		)
	}

	return (
		<main>
			{/* send tours here */}
			<Tours tours={tours} /> 
		</main>
	)
}

export default App
