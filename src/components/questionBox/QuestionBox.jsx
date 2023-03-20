import React from 'react'
import './questionbox.css'

export const QuestionBox = ({ question }) => {
  return (
    <div className='question_stage'>
        <div className="question_box_container">
            <div tabIndex='5' aria-labelledby='question' className="question">{question}</div>
        </div>
    </div>
  )
}
