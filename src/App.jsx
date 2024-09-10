import { useState } from 'react'
import './App.css'
import React from 'react'
import RolloutButton from "./RolloutButton"
import WavyCard from './WavyCard'
import HomeIcon from '@mui/icons-material/Home';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import JavascriptIcon from '@mui/icons-material/Javascript';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CardSkills from './CardSkills';
import DashCard from "./DashCard";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import FormularComponent from './FormularComponent'
import HomeButton from './HomeButton'



function App() {

  return (
    <div id='mainContainer'>


      {/* HEADER */}
      <div className='header outerBox'>
        <div className="gradient-bg"></div>
        <div className='headerIcons'>
          <a href='#mainContainer'><HomeButton /></a>
          <a href='#linkContact'><RolloutButton /></a>
        </div>
          <div className="innerBox">
            <div className="links">
              <ul>
                <li><a href='#linkOmne'>O mně & časová osa</a></li>
                <li><a href='#linkDovednosti'>Dovednosti</a></li>
                <li><a href='#linkPortfolio'>Má práce</a></li>
                <li><a href='#linkContact'>Kontaktuj mě</a></li>
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
          <div className='aboutPopisek'>
            <h3 id='linkOmne'>O mně</h3>
            <p>Jmenuji se Tereza Chudějová&nbsp;a jsem front-end developerka&nbsp;s IT základy získanými během studia&nbsp;na vysoké škole&nbsp;a vášní pro vytváření moderních, uživatelsky přívětivých webových stránek. Mám bakalářský titul&nbsp;z Aplikované informatiky&nbsp;a inženýrský titul&nbsp;z Informačního managementu, což mi poskytuje technické znalosti&nbsp;a schopnost <span>propojit různé aspekty vývoje, designu&nbsp;a firemních potřeb</span>. Po 5 letech práce jako datový analytik jsem se rozhodla následovat svou vášeň pro kreativní řešení&nbsp;a začala se intenzivně věnovat front-end vývoji, kde mohu <span>spojit logické myšlení&nbsp;s estetikou&nbsp;a designem</span>.</p>
            <h4>Záliby</h4>
            <ul>
              <li>Cestování</li>
              <li>Přechody hor</li>
              <li>Sportování</li>
              <li>Vaření a pečení</li>
              <li>Tvorba videoreceptů</li>
              <li>Filmy a seriály</li>
            </ul>
          </div>
          <div className="timeline">
              <div className="timelineCard">
                <h4>07/2024</h4>
                <p>Git & GitHub kurz</p>
              </div>
              <div className="timelineLine"></div>
              <div className="timelineCard">
                <h4>06/2024</h4>
                <p>React kurz</p>
              </div>
              <div className="timelineLine"></div>
              <div className="timelineCard">
                <h4>05/2024</h4>
                <p id='komercka'><span>Ing.</span> - Informační management, FIS&nbsp;VŠE</p>
                <p>+ VS Komerční komunikace</p>
              </div>
              <div className="timelineLine"></div>
              <div className="timelineCard">
                <h4>03/2024</h4>
                <p>JavaScript kurz</p>
              </div>
              <div className="timelineLine"></div>
              <div className="timelineCard">
                <h4>10/2023</h4>
                <p>HTML5/CSS3 kurz</p>
              </div>
              <div className="timelineLine"></div>
              <div className="timelineCard">
                <h4>06/2021</h4>
                <p><span>Bc.</span> - Aplikovaná informatika, FIS&nbsp;VŠE</p>
              </div>
              <div className="timelineLine"></div>
              <div className="timelineCard">
                <h4>04/2019 - 11/2019</h4>
                <p>Copywriter & content creator v Monfit&nbsp;Health&nbsp;s.r.o.</p>
              </div>
              <div className="timelineLine"></div>
              <div className="timelineCard">
                <h4>10/2018 - 09/2023</h4>
                <p>Datový analytik v <span>KPMG&nbsp;ČR&nbsp;s.r.o.</span></p>
              </div>
              <div className="timelineLine"></div>
              <ArrowBackIosIcon id="arrowDown"/>
            </div>
        </div>
      </div>



      {/* SECOND SECTION - DOVEDNOSTI */}
      <div className="secondSection-skills outerBox">
        <div className='innerBox'>
          <h3 id='linkDovednosti'>Dovednosti</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>Sass/SCSS</li>
            <li>SQL</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Git & GitHub</li>
            <li>Responsive webdesign</li>
            <li>Client-side routing</li>
            <li>CSS Grid / Flexbox</li>
            <li>EPC</li>
            <li>SSMS</li>
            <li>Visual Studio</li>
            <li>Visual Code</li>
            <li>Lightroom</li>
            <li>Canva</li>
            <li>Procreate</li>
            <li>Copywriting</li>
            <li>Anglický jazyk</li>
          </ul>
        </div>
      </div>




        {/* THIRD SECTION - PORTFOLIO */}
        <div className="thirdSection-portfolio outerBox">
        <div className='innerBox'>
          <h3 id='linkPortfolio'>Má práce</h3>
          <div className='portfolio'>
            <a href='https://terichudejova.github.io/kavarna/' target='_isBlank'><img className='portfolioMockups' src='images/kavarna_noBG.png'/></a>
            <div className='portfolioPopisek'>
                <a href='https://terichudejova.github.io/kavarna/' target='_isBlank'><h4>Kavárna Stará škola <ArrowOutwardIcon className='openWebIcon'/></h4></a>
                <ul>
                  <li>Projekt organizace Elpida zaměstnávající seniory</li>
                  <li>Zaměření se na firemní identitu, barvy a cílovou skupinu</li>
                  <li>Responsivní web-design</li>
                  <li>Foto carousel</li>
                  <li>Integrovaná mapa</li>
                  <br/>
                  <a href='https://www.instagram.com/staraskola_elpida/' target='_isBlank'><span><li>© fotky + logo: Instagram kavárny</li></span></a>
                </ul>
            </div>
            <div className='dividingLine'></div>
          </div>
          
          <div className='portfolio'>
            <a href='https://terichudejova.github.io/quantum-byte-solutions/' target='_isBlank'><img className='portfolioMockups' src='images/quantum_noBG.png'/></a>
            <div className='portfolioPopisek'>
                <a href='https://terichudejova.github.io/quantum-byte-solutions/' target='_isBlank'><h4>QuantumByte Solutions <ArrowOutwardIcon className='openWebIcon'/></h4></a>
                <ul>
                  <li>Imaginární IT firma nabízející služby založené na AI</li>
                  <li>Zaměření se na design</li>
                  <li>Responsivní web-design</li>
                  <li>Animované komponenty</li>
                  <li>Integrovaný formulář</li>
                  <li>Integrovaná mapa</li>
                  <br/>
                  <a href="https://www.freepik.com/log-in?client_id=freepik&lang=en" target='_isBlank'><span><li>© fotky: Freepik</li></span></a>
                </ul>
            </div>
            <div className='dividingLine'></div>
          </div>

          <div className='portfolio'>
            <a href='https://terichudejova.github.io/wedding/' target='_isBlank'><img className='portfolioMockups' src='images/wedding_noBG.png'/></a>
            <div className='portfolioPopisek'>
                <a href='https://terichudejova.github.io/wedding/' target='_isBlank'><h4>Svatba Petra & Lucie <ArrowOutwardIcon className='openWebIcon'/></h4></a>
                <ul>
                  <li>Webová stránka ohledně nadcházející svatby informující hosty</li>
                  <li>Routování mezi jednotlivými podstránkami, ScrollToTop...</li>
                  <li>Responsivní web-design</li>
                  <li>Integrovaný formulář</li>
                  <br/>
                  <a href="https://unsplash.com/" target='_isBlank'><span><li>© fotka: Unsplash</li></span></a>
                  <a href="https://www.canva.com/" target='_isBlank'><span><li>© ilustrace: Canva</li></span></a>
                </ul>
            </div>
            <div className='dividingLine'></div>
          </div>


          <div className='portfolio'>
            <a href='https://terichudejova.github.io/kaloricka-kalkulacka/' target='_isBlank'><img className='portfolioMockups' src='images/kalkulacka_noBG.png'/></a>
            <div className='portfolioPopisek'>
                <a href='https://terichudejova.github.io/kaloricka-kalkulacka/' target='_isBlank'><h4>Kalorická Kalkulačka <ArrowOutwardIcon className='openWebIcon'/></h4></a>
                <ul>
                  <li>Zaměření se na funkcionalitu</li>
                  <li>Naprogramovaná kalkulačka na vypočítání BMR využívající např. toggler</li>
                  <li>Responsivní web-design</li>
                  <li>CSS animace</li>
                  <li>Využití JavaScriptu, Reactu</li>
                  <br/>
                  <a href='https://unsplash.com/' target='_isBlank'><span><li>© fotky: Unsplash</li></span></a>
                </ul>
            </div>
          </div>

        </div>
      </div>




      {/* FOURTH SECTION - KONTAKT */}
      <div className="fourthSection-contact outerBox">
          <div className="innerBox">
              <h3 id='linkContact'>Kontaktuj mě</h3>
              <div className='contactPage'>
                <WavyCard />
                <FormularComponent />
              </div>
          </div>
      </div>


      {/* FOOTER */}
      <div className="footer outerBox">
          <div className="innerBox">
              <p>© Tereza Chudějová, 2024</p>
          </div>
      </div>


    </div>
  )
}

export default App
