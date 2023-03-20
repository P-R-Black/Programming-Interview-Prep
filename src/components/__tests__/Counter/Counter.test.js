import {render, screen, cleanup, fireEvent, act, getByLabelText, getByTestId, } from '@testing-library/react';
import {userEvent} from '@testing-library/user-event'
import renderer from 'react-test-renderer';
import { Counter } from '../../counter/Counter';
import { QuestionCount } from '../../questioncount/QuestionCount';
import '@testing-library/jest-dom';
import React from 'react'

afterEach(() => {
    cleanup();
})

describe('Test Input & Counter', () => {

    test('Input Test', () => {
        const { getByTestId } = render(<QuestionCount/>);
        const input = getByTestId('qNumber');
        expect(input).toBeTruthy();
    })

    test('Input on Change', () => {
        const { queryByTestId } = render(<QuestionCount/>);  
        const input = queryByTestId('qNumber');
        const submitButton = queryByTestId('qNumberButton')
        fireEvent.change(screen.getByRole('spinbutton', {name: 'enter number of questions to answer'}),{
            target: {value: ""}
        })
        expect(input.innerHTML).toBe("")

        
    })

    test('Button Click', () => {
        const changeSize = jest.fn();
        const wrapper = render(<QuestionCount onClick={changeSize} />);
        const handleClick = jest.spyOn(React, "useState");
        handleClick.mockImplementation(size => [size, changeSize]);
     
        wrapper.queryByTestId("qNumberButton").click("click");
        expect(changeSize).toBeTruthy();
        
    })
})

describe('Counter', () => {
    test('counter', () => {
        let activeQuestion = 1
        let numberOfQuestions = 3
        const { getByTestId } = render(<Counter activeQuestion={activeQuestion} numberOfQuestions={numberOfQuestions}/>);
        const counter = getByTestId('counterTest')
        expect(counter.innerHTML).toBe(`${activeQuestion + 1}/${numberOfQuestions}`)
    })
})