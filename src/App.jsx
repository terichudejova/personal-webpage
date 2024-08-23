import { useState } from 'react'
import './App.css'


function App() {

  return (
    <div id='mainContainer'>


      {/* HEADER */}
      <div className='header outerBox'>
        <div className="gradient-bg"></div>
          <div className="innerBox">
            <div className="links">
              <ul>
                <li><a>O mně</a></li>
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
