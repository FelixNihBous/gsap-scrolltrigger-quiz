import React, { useEffect, useRef } from 'react';
import './css/FloatingComponents.css';
import Animations from './utils/Animations.jsx';
import gsap from 'gsap';

export default function FloatingComponents() {
    const buttonContainer = useRef();

    useEffect(() => {
        const tl = gsap.timeline({ paused: true });
        tl.to(buttonContainer.current, { background: 'white' });
        tl.to(buttonContainer.current, { background: 'black' });

        const handleMouseEnter = () => tl.play();
        const handleMouseLeave = () => tl.reverse();

        if (buttonContainer.current) {
            buttonContainer.current.addEventListener('mouseenter', handleMouseEnter);
            buttonContainer.current.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (buttonContainer.current) {
                buttonContainer.current.removeEventListener('mouseenter', handleMouseEnter);
                buttonContainer.current.removeEventListener('mouseleave', handleMouseLeave);
            }
            tl.kill();
        };
    }, []);

    return (
        <>
            <div className='button-wrapper' ref={buttonContainer}>
                <Animations direction="up">
                    <button className='donate'>donate</button>
                </Animations>
            </div>
            <div className='webflow-mark'>
                <img className='badge' src="/webflow-badge-icon-d2.89e12c322e.svg" alt="" />
                <img className='text' src="/webflow-badge-text-d2.c82cec3b78.svg" alt="" />
            </div>
        </>
    );
}
