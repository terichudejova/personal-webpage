import "./DashCard.css"

export default function DashCard({skill}) {
    return (
        <div className='aboutPicture'>
              <div className="mainCard">
                <p>{skill}</p>
              </div>
        </div>
    )
}