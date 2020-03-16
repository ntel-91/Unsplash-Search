import React, { useState } from 'react';
import styled from 'styled-components'
import NavBar from './NavBar';
import UnsplashSearchForm from './UnsplashSearchForm'
import MainContainer from './MainContainer'

const App = () => {
	const [ results, setResults ] = useState([])
	const [ displayResultGrid, setDisplayResultGrid ] = useState(false)

	const displayResults = items => {
		setResults(items)
	}

  	return (
		<Wrapper>
			<NavBar />
			<h1>Unsplash Search Bar!</h1>
			<UnsplashSearchForm displayResults={displayResults}/>
	  		{ results.length === 0 ? null : <MainContainer results={results} /> }
		</Wrapper>
	)
}

export default App;
	
const Wrapper = styled.div`
	text-align: center;
	margin-top: 45px;
	margin-bottom: 45px;
`

