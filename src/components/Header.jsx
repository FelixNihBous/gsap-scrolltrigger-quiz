import React from 'react'
import gsap from 'gsap'
import { useEffect } from 'react';
import Animations from './utils/Animations.jsx'

import './css/Header.css'

function Header() {
  useEffect(() => {
    gsap.set('.catImg', { display: 'none' });

    const tl = gsap.timeline({ repeat: -1 })

    tl
      .to('.catImg', { display: 'none', duration: 0.001 })
      .to('.dogImg', { opacity: 1, display: 'block', duration: 2 })
      .to('.dogImg', { opacity: 0, y: 100, duration: 0.4, onComplete: () => { gsap.set('.dogImg', { display: 'none', y: 0 }) } })
      .to('.catImg', { opacity: 1, display: 'block', duration: 2 })
      .to('.catImg', { opacity: 0, y: 100, duration: 0.4, onComplete: () => { gsap.set('.catImg', { display: 'none', y: 0 }) } })

    const socialMedia = document.querySelectorAll('.media-social');
    socialMedia.forEach((element) => {
      element.addEventListener('mouseenter', () => {
        gsap.to(element, { scale: 0.8, duration: 0.3, ease: 'power2.out' });
      });

      element.addEventListener('mouseleave', () => {
        gsap.to(element, { scale: 1, duration: 0.3, ease: 'power2.out' });
      });
    });

    return () => gsap.killTweensOf(tl, socialMedia)

  }, [])


  return (
    <>
      <div className='header'>
        <div className='content-wrapper'>
          <Animations direction="up">

            <div className='logo-wrapper'>
              <img className='dogImg' src='/627fc7fcdc0f8e9cbcc8ffed_isa-logo-dog-clean.svg' alt="" />
              <img className='catImg' src='/627fc81139e6f5dca2d02054_isa-logo-cat-clean.svg' alt="" />
            </div>
          </Animations>
          <Animations direction='right'>
            <h1>
              Innovative<br />Solutions<br />for Animals
            </h1>
          </Animations>
        </div>
        <Animations direction='down'>
          <h2>charity organization</h2>
          <div className='header-foot'>
            <div className='media-social-wrapper'>
              <img className='media-social' src="/6274433d06989d76edcff015_9055867_youtube_bxl.svg" alt="" />
              <img className='media-social' src="/6274449bf840c377311f2e08_9055851_instagram_bxl.svg" alt="" />
              <img className='media-social' src="/627443d78de17d2c59c8352c_9055795_facebook_bxl.svg" alt="" />
              <img className='media-social' src="/6274440c6a0ab7631dce0cd1_9055888_patreon_bxl.svg" alt="" />
              <img className='media-social' src="/627443f9ac91b492e4c220ba_9055800_telegram_bxl.svg" alt="" />
            </div>
          </div>
        </Animations>


      </div>
    </>
  );
}

export default Header
