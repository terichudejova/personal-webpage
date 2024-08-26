import { useState } from 'react'
import './App.css'
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
                <li><a href='#mainContainer'>Domů</a></li>
                <li><a href='#linkOmne'>O mně</a></li>
                <li><a href='#linkDovednosti'>Dovednosti</a></li>
                <li><a href='#linkPortfolio'>Má práce</a></li>
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
          <div className="timeline">
              {/* <div className='timelineCircle'></div>
              <div className="timelineLine"></div> */}
              <div className="timelineFirst timelineCard">
                <div id="kpmgIcon" className='iconCircle'><EqualizerIcon className='iconInside'/></div>
                <h4>10/2018 - 09/2023</h4>
                <p>Datový analytik v KPMG ČR s.r.o.</p>
              </div>
              <div className="timelineLine"></div>
              <div className="timelineSecond timelineCard">
                <div id="bcIcon" className='iconCircle'><SchoolIcon className='iconInside'/></div>
                <h4>06/2021</h4>
                <p><span>Bc.</span> - Aplikovaná informatika, FIS VŠE</p>
              </div>
              <div className="timelineLine"></div>
              <div className="timelineThird timelineCard">
                <div id="htmlIcon" className='iconCircle'><CodeIcon className='iconInside'/></div>
                <h4>10/2023</h4>
                <p>HTML5/CSS3 kurz</p>
              </div>
              <div className="timelineLine"></div>
              <div className="timelineFourth timelineCard">
                <div id="jsIcon" className='iconCircle'><JavascriptIcon className='iconInside'/></div>
                <h4>03/2024</h4>
                <p>JavaScript kurz</p>
              </div>
              <div className="timelineLine"></div>
              <div className="timelineFifth timelineCard">
                <div id="ingIcon" className='iconCircle'><SchoolIcon className='iconInside'/></div>
                <h4>05/2024</h4>
                <p id='komercka'><span>Ing.</span> - Informační management, FIS VŠE</p>
                <p>+ VS Komerční komunikace</p>
              </div>
              <div className="timelineLine"></div>
              <div className="timelineSixth timelineCard">
                <div id="reactIcon" className='iconCircle'><AutoAwesomeIcon className='iconInside'/></div>
                <h4>06/2024</h4>
                <p>React kurz</p>
              </div>
              <div className="timelineLine"></div>
              <div className="timelineSeventh timelineCard">
                <div id="gitIcon" className='iconCircle'><GitHubIcon className='iconInside'/></div>
                <h4>07/2024</h4>
                <p>Git & GitHub kurz</p>
              </div>
              <div className="timelineLine"></div>
              <ArrowBackIosIcon id="arrowDown"/>
              {/* <div className='timelineCircle'></div> */}
            </div>
          <div className='aboutPopisek'>
            <h3 id='linkOmne'>O mně</h3>
            <p>Jmenuji se Tereza Chudějová&nbsp;a jsem front-end developerka&nbsp;s IT základy získanými během studia&nbsp;na vysoké škole&nbsp;a vášní pro vytváření moderních, uživatelsky přívětivých webových stránek. Mám bakalářský titul&nbsp;z Aplikované informatiky&nbsp;a inženýrský titul&nbsp;z Informačního managementu, což mi poskytuje technické znalosti&nbsp;a schopnost <span>propojit různé aspekty vývoje, designu&nbsp;a firemních potřeb</span>. Po 5 letech práce jako datový analytik jsem se rozhodla následovat svou vášeň pro kreativní řešení&nbsp;a začala se intenzivně věnovat front-end vývoji, kde mohu <span>spojit logické myšlení&nbsp;s estetikou&nbsp;a designem</span>.</p>
            <h4>Záliby</h4>
            <ul>
              <li>Cestování</li>
              <li>Přechody hor</li>
              <li>Sport</li>
              <li>Vaření a pečení</li>
              <li>Točení receptů</li>
              <li>Filmy a seriály</li>
            </ul>
          </div>
          <svg id='splash' width="100%" height="80%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 500">
            <path d="M300,50 C250,90 150,70 100,150 C50,230 120,280 150,350 C180,420 280,420 320,380 C360,340 460,360 480,300 C500,240 400,220 400,150 C400,80 350,10 300,50 Z" fill="#1698CB" />
          </svg>
        </div>
      </div>



      {/* SECOND SECTION */}
      <div className="secondSection-skills outerBox">
        <div className='innerBox'>
          <h3 id='linkDovednosti'>Dovednosti</h3>
          <div className="skills">
            <CardSkills skill={"HTML5"}/>
            <CardSkills skill={"CSS3"}/>
            <CardSkills skill={"SQL"}/>
            <CardSkills skill={"JavaScript"}/>
            <CardSkills skill={"React"}/>
            <CardSkills skill={"Bootstrap"}/>
            <CardSkills skill={"Git & GitHub"}/>
            <CardSkills skill={"EPC"}/>
            <CardSkills skill={"SSMS"}/>
            <CardSkills skill={"MS Office"}/>
            <CardSkills skill={"Visual Studio"}/>
            <CardSkills skill={"Visual Code"}/>
            <CardSkills skill={"Lightroom"}/>
            <CardSkills skill={"Canva"}/>
            <CardSkills skill={"Procreate"}/>
            <CardSkills skill={"Copywriting"}/>
          </div>
        </div>
      </div>




        {/* THIRD SECTION */}
        <div className="thirdSection-portfolio outerBox">
        <div className='innerBox'>
          <h3 id='linkPortfolio'>Má práce</h3>
          <div className='portfolio'>
            <a href='https://terichudejova.github.io/first-webpage/#landingPage' target='_isBlank'><DashCard url={"images/kavarna_mockup.png"}/></a>
            <div className='portfolioPopisek'>
                <a href='https://terichudejova.github.io/first-webpage/#landingPage' target='_isBlank'><h4>Kavárna Stará škola <ArrowOutwardIcon className='openWebIcon'/></h4></a>
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
            <a href='https://terichudejova.github.io/quantum-byte-solutions/' target='_isBlank'><DashCard url={"images/quantum_mockup.png"}/></a>
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
            <a href='https://terichudejova.github.io/kaloricka-kalkulacka/' target='_isBlank'><DashCard url={"images/kalkulacka_mockup.png"}/></a>
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


      <div className="footer outerBox">

      </div>


    </div>
  )
}

export default App
