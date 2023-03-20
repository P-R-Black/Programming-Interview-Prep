import React from 'react'
import './answerbox.css'

export const AnswerBoxes = ({ answers, answerSelected, onAnswerSelected, indexOfSelectedAnswer}) => {


  return (
    <div className='answerbox_container'>
        {answers.map((answer, idx) => (
            <button data-testid="buttonTest" id="btn" key={idx}
                onClick={() => {answerSelected(); onAnswerSelected(answer, idx)}}
                className={indexOfSelectedAnswer === idx ? 'selected-answer' : null}>
                <span key={idx + 1}className="answer_btn answers"  data-testid="textTest">{answer}</span>
            </button>
        ))}
    </div>
  )
}
