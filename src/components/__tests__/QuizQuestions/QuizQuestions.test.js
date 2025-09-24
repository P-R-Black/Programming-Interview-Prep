import fullStackQuestionBank from '../../quizQuestions/fullStackQuestions';

import { render, screen, cleanup, getAllByRole, fireEvent, getByTestId } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Nav } from '../../nav/Nav';
import '@testing-library/jest-dom';

afterEach(() => {
    cleanup()
})

console.log('fullStackQuestionBank', fullStackQuestionBank)
