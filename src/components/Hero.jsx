import React, { useRef } from 'react'
import './css/Hero.css'
import Animations from './utils/Animations.jsx'


function Hero() {
    const videoRef = useRef();
    return (
        <div className='hero-contents'>
            <h2>We are</h2>
            <div className='hero-content-text'>team of like-minded people, socially active companies, media personalities, volunteers who help low-income shelters and foster carers to support homeless animals.</div>
            <h2>Our primary goal</h2>
            <div className='hero-content-text'>is to provide animals with the most necessary things - food, medicine, and urgent needs for the livelihood of shelters. We believe in our power and the power of conscious citizens who care about the environment and their health, who understand the importance of helping each other, especially our little friends. Growth begins with your care for your loved ones. Animals are one of the closest creatures to humans who remain with us throughout our lives. We all know the healing power of warmth, grace, and big loving eyes.</div>
            <div className='hero-quotes'>
                <p>"Animals need to have friends. Just like humans."</p>
                <p>- James Herriot, All Creatures Great and Small</p>
            </div>
            <div className='hero-content-text'>Who else if not we should support our younger brothers, especially in difficult times? Let's be friends!</div>
            <Animations direction='down'>
            <iframe
                src="https://www.youtube.com/embed/5Wk1rp99B7o"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="video-frame"
                ref={videoRef}
            />
            </Animations>
        </div>
    )
}

export default Hero
