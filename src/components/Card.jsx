import React from 'react'
import { BiBuilding, BiLogoAndroid, BiLogoHtml5 } from 'react-icons/bi'

const course = [
    {
        title:"web development",
        icon: <BiLogoHtml5 />
    },
    {
        title:"App development",
        duration:"2 Hour",
        icon: <BiLogoAndroid />
    },
    {
        title:"UX & UI",
        duration:"2 Hour",
        icon: <BiBuilding />
    },
]

const Card = () => {
  return (
    <div className='card-container'>
      {course.map((v,i) => (
        <div className='card'>
            <div className="card-cover">
                {v.icon}
            </div>
            <div className="card-title">
                bolo
                <h2>{v.title}</h2>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Card
