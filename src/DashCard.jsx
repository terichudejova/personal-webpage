import "./DashCard.css"

export default function DashCard({url}) {
    return (
        <div className='aboutPicture'>
              <div className='firstCard cardDash'></div>
              <div className='secondCard cardDash'></div>
              <div className='thirdCard cardDash'></div>
              <div className="fourthCard cardDash">
                <img src={url}/>
              </div>
        </div>
    )
}