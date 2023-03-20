import React from 'react'
import './results.css'

export const Results = ({numberOfQuestions, score, missed, showMissedQuestion, refreshPage}) => {

  return (
    <div className='container result_container'>
        <div className="quiz_results">
            <h1>Results</h1>
            <h2>Total Questions: <span>{numberOfQuestions}</span></h2>
            <h2>Correct Answers: <span>{score}</span></h2>
            <h2>Wrong Answers: <span>{missed}</span></h2>
            {missed === 0 ? (
                <div className='congrats'>You Answered Everything Correctly. Congratulations!</div>
            ): (
                <div className="answer_summary_container">
                <div className="answer_summary">
                    <p><span className="wrong_question ques">Question</span><span className="wrong_answers ans">Answers</span></p>
                </div>
                {
                    showMissedQuestion.map((ques, idx) => (
                        <div className="summary_display" key={idx}>
                        <span className="wrong_question">{ques.question} </span>
                        |
                        <span className="wrong_answers"> {ques.correct}</span>
                        {ques.explanation ? (<div className="explanation">Explanation: {ques.explanation}</div>): ""}
                    </div>
                    )
                    
                    )
                }
            </div>
            )}
                <button onClick={refreshPage} className="play_again" id="btn">More Questions</button>
        </div>
            <div className="bg_circle_two"></div>
            <div className="bg_circle_three"></div>
    </div>
  )
}
