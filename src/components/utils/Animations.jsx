import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import { animateSlideIn } from '../utils/gsap-animation.js';

export default function Animations({ direction, children }) {
    const elementRef = useRef(null);

    useEffect(() => {
        if (elementRef.current) {
            const cleanup = animateSlideIn(elementRef.current, direction);

            return () => {
                cleanup();
            };
        }
    }, [direction]);

    return <div ref={elementRef}>{children}</div>;
}
