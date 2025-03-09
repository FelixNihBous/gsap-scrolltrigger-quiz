import React, { useEffect, useState, useRef } from 'react';
import './css/Shelters.css';
import gsap from 'gsap';
import Animations from './utils/Animations.jsx';

function Shelters() {
    const [shelters] = useState([
        { name: 'Shelter of Victoria Bulbyna' },
        { name: 'City of faithful hearts' },
        { name: 'Shelter of Natalia Tymoshenko' },
        { name: 'Shelter of Jeanne Sass' },
        { name: 'Shelter of Victoria Bondarenko' },
        { name: 'Sterilization center' },
        { name: 'Zoo chance' },
        { name: 'Save lives' },
        { name: 'City Center for the Treatment of Animals' },
        { name: 'Society for the Protection of Animals in Sumy' },
        { name: 'The right to life' },
        { name: '4 paws' },
        { name: 'The kingdom of cats' },
        { name: 'Zvir' },
        { name: 'Mercy' },
        { name: 'Happy dog' },
        { name: 'Give me a paw, friend' },
        { name: 'Friend' },
        { name: 'Hope' },
        { name: 'We are for the right to life' },
        { name: 'Planeta' },
        { name: 'Second Life' },
        { name: 'Happy shore' },
        { name: 'Retrieverteam' },
        { name: 'Shelter of Irina Dobrolyubova' },
        { name: 'Matilda' },
        { name: 'Life' },
        { name: 'Second chance' },
        { name: 'SOS' },
        { name: 'Best friends' },
    ]);

    return (
        <div className="shelters-container">
            <div className="text-section">
                <h2>We want to help</h2>
                <p>homeless packs, volunteers, guardians, overstayers, shelters and other organisations</p>
            </div>
            <Animations direction='down'>
                <div className="cards-section">
                    {shelters.map((shelter) => {
                        const shelterCard = useRef(null);
                        const cardContent = useRef(null);
                        const applyImg = useRef(null);

                        useEffect(() => {
                            if (shelterCard.current) {
                                const tl = gsap.timeline({ paused: true });
                                tl.to(shelterCard.current, { border: 'none' })
                                    .to(cardContent.current, { width: '100%', position: 'relative', bottom: '10px', left: '10px', border: 'solid 4px black' })

                                const handleMouseEnter = () => tl.play();
                                const handleMouseLeave = () => {
                                    tl.reverse();
                                    gsap.to(cardContent.current, { border: 'none' });
                                    gsap.to(shelterCard.current, { border: 'solid 4px black', duration: 0.2 });
                                };

                                shelterCard.current.addEventListener('mouseenter', handleMouseEnter);
                                shelterCard.current.addEventListener('mouseleave', handleMouseLeave);

                                return () => {
                                    if (shelterCard.current) {
                                        shelterCard.current.removeEventListener('mouseenter', handleMouseEnter);
                                        shelterCard.current.removeEventListener('mouseleave', handleMouseLeave);
                                        tl.kill();
                                    }
                                };
                            }
                        }, []);

                        return (
                            <div key={shelter.name} className="shelter-card" ref={shelterCard}>
                                <div className='card-content' ref={cardContent}>
                                    <h3>{shelter.name}</h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Animations>
            <Animations direction={('down', 'left')}>

                <div className='apply-button'>
                    <p>apply for help</p>
                    <img src="/6273a272fe3407579aa3d6c9_PngItem_344959.png" alt=""
                    />
                </div>
            </Animations>
        </div>
    );
}

export default Shelters;
