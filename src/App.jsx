import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div id='mainContainer'>


      {/* HEADER */}
      <div className='header outerBox'>
        <div className='innerBox'>
          <ul>
            <li><a>O mně</a></li>
            <li><a>Časová osa</a></li>
            <li><a>Dovednosti</a></li>
            <li><a>Má práce</a></li>
            <li><a>Kontaktuj mě</a></li>
          </ul>
        </div>
      </div>


      {/* FIRST SECTION - LANDING PAGE */}
      <div className='firstSection-landingPage outerBox'>
        <div className='innerBox'>
          <h1>Teri</h1>
          <h2>Front-End Developerka</h2>
          <p>Jmenuji se Tereza Chudějová a jsem front-end developerka s IT základy získanými během studia na vysoké škole a vášní pro vytváření moderních, uživatelsky přívětivých webových stránek. Mám bakalářský titul z Aplikované informatiky a inženýrský titul z Informačního managementu, což mi poskytuje technické znalosti a schopnost propojit různé aspekty vývoje, designu a firemních potřeb. Po 5 letech práce jako datový analytik jsem se rozhodla následovat svou vášeň pro kreativní řešení a začala se intenzivně věnovat front-end vývoji, kde mohu spojit logické myšlení s estetikou a designem.</p>
        </div>
      </div>


      {/* SECTION - BLUE WAVE */}
      <div className='blueWave outerBox'>

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
