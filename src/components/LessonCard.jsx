

import React from 'react'

const LessonCard = ({name, hour, image}) => {
  return (
    <div className='lessoncard' >
      <img  src={image} alt="" />

      <div>
        <p>Lesson Name : {name}</p>
        <p>Lesson Hour :{hour}</p>
      
      </div>
    </div>
    
  )
}

export default LessonCard
