import React from 'react';
import './counter.css';
import { QuestionCount } from '../questioncount/QuestionCount';

export const Counter = ({ activeQuestion, numberOfQuestions, getDigit, handleChange, handleClick }) => {
  return (
    <section className='counter_section'>
      <div className='counter' data-testid="counterTest">
        {activeQuestion + 1}/{numberOfQuestions}
    </div>
        <QuestionCount
          numberOfQuestions={numberOfQuestions}
          getDigit={getDigit}
          handleChange={handleChange}
          handleClick={handleClick}
        
        />
    </section>
    
  )
}
