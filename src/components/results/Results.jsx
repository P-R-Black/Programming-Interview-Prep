import React, { useState, useEffect } from 'react'
import './results.css'

export const Results = ({numberOfQuestions, score, missed, showMissedQuestion, refreshPage}) => {

    const [keywords, setKeywords] = useState([])


    useEffect(() => {
        const getKeywords = () => {
            let  newState = [];
            let kwords;
             showMissedQuestion.map((k) => (
                 newState.push(k.keyword)
             ))
             let test = newState.flat()
             for (let i = 0; i < test.length; i++){
                 let newTods = [...test]
                 kwords = newTods.filter(ks => ks !== newTods)
             }
             return kwords
         }
        setKeywords(getKeywords)
    },[showMissedQuestion])
    

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
                    <p><span className="wrong_question ques">What You Got Wrong</span><span className="wrong_answers ans">The Correct Answer</span></p>
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
                <h3 className="keyword_box">Based on the questions you missed, here are some subjects that you may want to brush up on before your interview.</h3>
                <ul>
                    {keywords.map((item, key) => (
                        <li key={key}><h3>{item}</h3></li>
                    ))}
                </ul>
             
            </div>
            )}
                <button onClick={refreshPage} className="play_again" id="btn">More Questions</button>
        </div>
            <div className="bg_circle_two"></div>
            <div className="bg_circle_three"></div>
    </div>
  )
}
