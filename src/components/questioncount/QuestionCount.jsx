import React from 'react'
import './questioncount.css'

export const QuestionCount = ({ handleChange, handleClick, getDigit }) => {


  return (
    <div className="input_section">
      <form data-testid="qNumberform">
        <input
          aria-label="enter number of questions to answer"
          name="number"
          type="number"
          id="number"
          ref={getDigit}
          onChange={handleChange}
          placeholder="Number of Questions"
          data-testid="qNumber"
        />
        <button aria-label="submit" data-testid="qNumberButton" onClick={handleClick} type="submit" className="btn">Submit</button>
      </form>


    </div>
  )
}
