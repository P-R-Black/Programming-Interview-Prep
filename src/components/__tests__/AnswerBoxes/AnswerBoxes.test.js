import {render, screen, cleanup, fireEvent, act } from '@testing-library/react';
import {userEvent} from '@testing-library/user-event'
import renderer from 'react-test-renderer';
import { AnswerBoxes } from '../../answerBoxes/AnswerBoxes';
import '@testing-library/jest-dom';

afterEach(() => {
    cleanup()
})

describe("Answer Button Component", () => {

    test("buttons render", () => {
        render(<AnswerBoxes answers={['test1', 'test2', 'test3', 'test4']} />);
        var button = screen.getAllByTestId("buttonTest")
        expect(button).toBeTruthy()
    })
    
    test('validate text in button', () => {
        render(<AnswerBoxes answers={['test1', 'test2', 'test3', 'test4']} />);
        var testElem = screen.getAllByTestId("textTest")
        testElem.innerHTML = 'test1', 'test2', 'test3', 'test4'
        expect(testElem.innerHTML).toBe('test1', 'test2', 'test3', 'test4')
    })

    test('Number of Buttons Rendered', () => {
        const { getAllByTestId } = render(<AnswerBoxes answers={['test1', 'test2', 'test3', 'test4']} />); 
        var testElemLength = getAllByTestId("buttonTest")
        expect(testElemLength).toHaveLength(4)
    })

})



// test('test button click', () => {
//     render(<AnswerBoxes answers={['test1', 'test2', 'test3', 'test4']}/>);
//     var testElem = screen.getAllByTestId("textTest")

//     const buttonPress = screen.getByRole("button", {name: 'test1'})
//     fireEvent.click(buttonPress)

// })