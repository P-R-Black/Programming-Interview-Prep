import React, { useState, useRef } from 'react';
import './stage.css';

import reactQuestionBank from '../../quizQuestions/reactQuestions';
import djangoQuestionBank from '../../quizQuestions/djangoQuestions';
import htmlQuestionBank from '../../quizQuestions/htmlQuestions';
import cssQuestionBank from '../../quizQuestions/cssQuestions';
import fullStackQuestionBank from '../../quizQuestions/fullStackQuestions';

import { Nav } from '../nav/Nav'
import { Counter } from '../counter/Counter'

import { QuestionBox } from '../questionBox/QuestionBox';
import { AnswerBoxes } from '../answerBoxes/AnswerBoxes'
import { Results } from '../results/Results';



export const Stage = () => {

    const [logo, setLogo] = useState('React')
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [indexOfSelectedAnswer, setIndexOfSelectedAnswer] = useState(null)

    const [showMissedQuestion, setShowMissedQuestion] = useState([])
    const [showResults, setShowResults] = useState(false)

    const [score, setSores] = useState(0)
    const [missed, setMissed] = useState(0)

    const [numberOfQuestions, setNumberOfQuestions] = useState(5)
    const getDigit = useRef()

    const questionBanks = {
        React: reactQuestionBank,
        Django: djangoQuestionBank,
        HTML: htmlQuestionBank,
        CSS: cssQuestionBank,
        FullStack: fullStackQuestionBank,

    }

    console.log('fullStackQuestionBank', fullStackQuestionBank)

    const quizQuest = questionBanks[logo === "Full Stack" ? "FullStack" : logo] || [];
    const quizQuestArray = quizQuest.sort(() => 0.5 - Math.random()).slice(0, numberOfQuestions);
    const { question, image, answers, correct, explanation, keyword } = quizQuestArray[activeQuestion];
    const [updated, setUpdated] = useState(numberOfQuestions);



    const handleChange = (e) => {
        const digits = getDigit.current.value
        if (digits === "") return;
        setUpdated(digits);

    }

    const handleClick = (e) => {
        e.preventDefault()
        setNumberOfQuestions(updated)
        getDigit.current.value = null
    };


    const getLogo = (e) => {
        setLogo(e.target.innerText)
    }

    const refreshPage = () => {
        window.location.reload(false)
    }


    const answerSelected = () => {
        // on answer select setIndexofAnswer
        setIndexOfSelectedAnswer(null)

        // check length of question queue and call another question if not at the end
        if (activeQuestion !== numberOfQuestions - 1) {
            setActiveQuestion((prev) => prev + 1)
        } else {
            // if at the end, set question queue back to 0 for start, and call results page.
            setActiveQuestion(0)
            setShowResults(true)
        }
    }


    const onAnswerSelected = (answer, index) => {
        setIndexOfSelectedAnswer(index)
        if (answer === correct) {
            setSores((prev) => prev + 1)
        } else {
            setMissed((prev) => prev + 1)
            setShowMissedQuestion((prev =>
                [...prev, { question, correct, explanation, keyword, image }]))
        }
    }


    return (
        <>
            <Nav
                getLogo={getLogo}
                logo={logo}
                refreshPage={refreshPage}
            />
            <div className="container stage_container">
                <Counter
                    showResults={showResults}
                    activeQuestion={activeQuestion}
                    numberOfQuestions={numberOfQuestions}
                    handleChange={handleChange}
                    handleClick={handleClick}
                    getDigit={getDigit}
                />

                {!showResults ? (
                    <div className="inner_div">
                        <QuestionBox question={question} image={image} />

                        <AnswerBoxes
                            answers={answers.sort(Math.random)}
                            answerSelected={answerSelected}
                            onAnswerSelected={onAnswerSelected}
                            indexOfSelectedAnswer={indexOfSelectedAnswer}
                        />
                        <div className='bg_circle'></div>
                    </div>
                ) : (
                    <Results
                        numberOfQuestions={numberOfQuestions}
                        score={score}
                        missed={missed}
                        showMissedQuestion={showMissedQuestion}
                        refreshPage={refreshPage}
                    />
                )}
            </div>
        </>
    )
}
