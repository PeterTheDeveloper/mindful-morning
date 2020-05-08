import React from 'react'

function VideoPage(props) {
    return (
        <div>
            Video Page
            <input className='videoSearchInput'></input>
            <button class='searchButton buttons'>Search</button>
            <button className='buttons' onClick={props.prevPage}>Prev</button>


            <div className='searchResults'></div>
        </div>
    )
}

export default VideoPage
