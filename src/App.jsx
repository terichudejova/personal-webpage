import { useState } from 'react'
import './App.css'
import RolloutButton from "./RolloutButton"
import WavyCard from './WavyCard'
import HomeIcon from '@mui/icons-material/Home';


function App() {

  return (
    <div id='mainContainer'>


      {/* HEADER */}
      <div className='header outerBox'>
        <div className="gradient-bg"></div>
          <div className="innerBox">
            <div className="links">
              <div className='headerIcons'>
                <button><HomeIcon className='homeIcon'/></button>
                <RolloutButton />
              </div>
              <ul>
                <li><a href='#linkOmne'>O mně</a></li>
                <li><a>Časová osa</a></li>
                <li><a>Dovednosti</a></li>
                <li><a>Má práce</a></li>
                <li><a>Kontaktuj mě</a></li>
              </ul>
            </div>
            <div className="about">
              <h1>Ahoj, jsem Teri.</h1>
              <h2>Front-End Developer</h2>
              <div className='profileImage'>
                <img id='profileImage' src='images/profile.png'/>
              </div>
            </div>
          </div>
      </div>



      {/* FIRST SECTION - ABOUT ME */}
      <div className='firstSection-aboutMe outerBox'>
        <div className='innerBox'>
          <div className='aboutPicture'>
            <div className='firstCard cardDash'></div>
            <div className='secondCard cardDash'></div>
            <div className='thirdCard cardDash'></div>
            <div className="fourthCard cardDash"><img id='surfPicture' src='images/surf.png'/></div>
          </div>
          <div className='aboutPopisek'>
            <h3 id='linkOmne'>O mně</h3>
            <p>Jmenuji se Tereza Chudějová a jsem front-end developerka s IT základy získanými během studia na vysoké škole a vášní pro vytváření moderních, uživatelsky přívětivých webových stránek. Mám bakalářský titul z Aplikované informatiky a inženýrský titul z Informačního managementu, což mi poskytuje technické znalosti a schopnost propojit různé aspekty vývoje, designu a firemních potřeb. Po 5 letech práce jako datový analytik jsem se rozhodla následovat svou vášeň pro kreativní řešení a začala se intenzivně věnovat front-end vývoji, kde mohu spojit logické myšlení s estetikou a designem.</p>
          </div>
          <svg id='splash' width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
            <path d="M300,50 C250,90 150,70 100,150 C50,230 120,280 150,350 C180,420 280,420 320,380 C360,340 460,360 480,300 C500,240 400,220 400,150 C400,80 350,10 300,50 Z" fill="#1698CB" />
          </svg>
        </div>
      </div>



      {/* SECOND SECTION */}
      <div className="secondSection outerBox">

      </div>


      <div className="footer outerBox">

      </div>


    </div>
  )
}

export default App
