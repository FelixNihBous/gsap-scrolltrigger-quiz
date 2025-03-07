import React, { useRef, useEffect, useState } from 'react'
import './css/ProjectList.css'
import gsap from 'gsap';
import Animations from './utils/Animations.jsx'


function ProjectList() {

    const [projectData, setProjectData] = useState([
        {
            title: "Emergency Aid. WAR 2022.",
            content: "providing food and medicine to the shelters and animals which lost their homes and families due to the war",
            className: "black"
        },
        {
            title: "Non-commercial feed line.",
            content: "construction of industrial production base where food for shelters will be produced on a free basis",
            className: "green"
        },
        {
            title: "Education and Control",
            content: "lectures on communication, organisation and coordination of processes, control over the use of aid",
            className: "pink"
        }
    ]);

    const projectRefs = useRef([]);

    useEffect(() => {
        projectRefs.current.forEach((projectRef, index) => {
            if (projectRef) {
                const box = projectRef.querySelector('.projectlist-wrapper');
                const text = projectRef.querySelector('.text-content');
                const title = projectRef.querySelector('.projectlist-title');
                const content = projectRef.querySelector('.projectlist-content');
                const container = projectRef.querySelector('.contents-container');

                const tl = gsap.timeline({ paused: true });

                tl.to(container, { duration: 0.3, border: 'none' }) 
                    .to(text, { color: 'white', duration: 0.3, left: '10px', bottom: '10px', position: 'relative', border: '3px solid white', width: '96%', height: '100%' }, "<")
                    .to(title, { color: 'white', duration: 0.3 }, "<")
                    .to(content, { color: 'white', duration: 0.3 }, "<")
                    .to(box, { border: 'none', duration: 0.3 }, "<");

                const handleMouseEnter = () => tl.play();
                const handleMouseLeave = () => tl.reverse();

                box.addEventListener('mouseenter', handleMouseEnter);
                box.addEventListener('mouseleave', handleMouseLeave);

                return () => {
                    box.removeEventListener('mouseenter', handleMouseEnter);
                    box.removeEventListener('mouseleave', handleMouseLeave);
                    tl.kill();
                }
            }
        });
    }, [projectData]);


    return (
        <div>
            <div className='project-container'>
                <h2>Our projects</h2>
                <p>are very different in terms of priority, scale and complexity of implementation</p>
                <Animations direction='left'>
                    {projectData.map((project, index) => (
                        <div ref={el => projectRefs.current[index] = el} key={index}>
                            <div className={`projectlist-wrapper ${project.className}`}>
                                <div className='contents-container'>
                                    <div className='text-content'>
                                        <div className='projectlist-title title-size'>{project.title}</div>
                                        <div className='projectlist-content title-content'>{project.content}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Animations>

            </div>
        </div>
    )
}

export default ProjectList;