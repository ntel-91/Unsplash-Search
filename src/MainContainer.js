import React from 'react'
import styled from 'styled-components'

const MainContainer = ({ results }) => {

    return (
        <Container>
            {/* <ImageContainer> */}
                {results.map( (url, index) => <ImageResult key={index} src={url}/>)}
                {/* {[1,2,3,4,5,6,7,8,10,9].map( (index) => <ImageResult key={index} />)} */}
            {/* </ImageContainer> */}
        </Container>
    )
}

export default MainContainer

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-items: center;
    width: 80%;
    margin: auto;
    border: black 2px solid;
`

const ImageResult = styled.img`
    padding: 15px;  
	height: 250px;
    width: 300px;
    object-fit:cover;
`