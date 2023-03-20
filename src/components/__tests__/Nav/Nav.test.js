import {render, screen, cleanup, getAllByRole, fireEvent, getByTestId } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Nav } from '../../nav/Nav';
import '@testing-library/jest-dom';

afterEach(() => {
    cleanup()
})

describe("Logo and Language Select", () => {
    test('logo change', () => {

        var logo;
        const getLogo = (e) => {
            logo = e.target.innerText
        }
    
        render (<Nav getLogo={getLogo}/>)
    
        var linkClickTwo = screen.getByRole('heading', {name: "React"})
        fireEvent.click(linkClickTwo)
        var linkClick = screen.getByTestId('navLinkTestReact').innerHTML
        expect(linkClickTwo.innerHTML).toEqual(linkClick)
        
        //queryByTestId
    })
    
})

