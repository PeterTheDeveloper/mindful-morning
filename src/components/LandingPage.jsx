import React from 'react'

function LandingPage(props) {
    return (
        <div>
            <div className='greeting'>
                <h2>Good Morning!</h2>
                <p>Welcome back for another Mindful Morning</p>
            </div>
            
            <button className='landingButton' onClick={props.nextPage}>Next</button>
        </div>
    )
}

export default LandingPage
