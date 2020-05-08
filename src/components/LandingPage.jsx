import React from 'react'

function LandingPage(props) {
    return (
        <div>
            <h2>Good Morning, welcome to the Mindful morning application</h2>
            
            <button onClick={props.nextPage}>Next</button>
        </div>
    )
}

export default LandingPage
