import React from 'react'
import video from '../assets/food.mp4'

function Video() {
    return (
        <div>
            <video autoPlay muted loop>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    )
}

export default Video
