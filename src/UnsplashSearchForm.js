import React, { useState } from 'react';
import styled from 'styled-components'
import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({ accessKey: "gJaZ6jqSFwAW2Pd4vriru2ycTZd_T4frNG__bI8_bkk" })

const UnsplashSearchForm = ({ displayResults }) => {
  	const [ term, setTerm ] = useState('')  
	
	const handleChange = e => {
		setTerm(e.target.value)
	}
    
    const handleSubmit = e => {
        e.preventDefault()
        unsplash.search.photos(term, 2, 12)
        .then(res => res.json())
        .then(data => {
            const searchResults = data.results.map(result => {
                return result.urls.regular
            })
            displayResults(searchResults)
        })
    }

  	return (
        <SearchForm onSubmit={handleSubmit}>
            <UnsplashSearchInput
                type='text'
                placeholder={'search...'}
                value={term}
                onChange={handleChange}
            />
            <UnsplashSearchSubmit
                type='submit'
                value='Unsplash Search'
            />
        </SearchForm>
	)
}

export default UnsplashSearchForm;

const SearchForm = styled.form`
    margin: auto;
    width: 80%;
`

const UnsplashSearchInput = styled.input`
	padding: 5px;
	margin: 10px;
`

const UnsplashSearchSubmit = styled.input`
    padding: 15px;
`