import gsap from "gsap"



export function animateSlideIn(target, direction) {
    let from = { opacity: 0 }
    let to = { x: 0, y: 0, duration: 2, ease: "power3.out", opacity: 1, scrub: false }

    // Direction is the way the animation is coming from (ex. if direction is right, then it is going to left)
    switch (direction) {
        case 'right':
            from.x = 100
            break
        case 'left':
            from.x = -100
            break
        case 'up':
            from.y = -100
            break
        case 'down':
            from.y = 100
            break
        default:
            from.x = -100
            break
    }

    gsap.fromTo(target, from, to)

    return () => gsap.killTweensOf(target)
}

export default animateSlideIn;