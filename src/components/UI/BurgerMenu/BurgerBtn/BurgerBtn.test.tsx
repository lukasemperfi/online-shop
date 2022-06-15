import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BurgerBtn } from "./BurgerBtn"
import * as Styled from './BurgerBtn.styled'

const onClick = jest.fn()

describe('BurgerBtn component', () => {
    it('burger and lines renders', () => {
        render(<BurgerBtn isMobile={false} onClick={onClick} isActive={false} />)
        const lines = screen.getAllByTestId('burger-btn-line') 
        expect(screen.getByTestId('burger-btn')).toBeInTheDocument();
        expect(lines).toHaveLength(3);        
    })

    describe('Visibility on desktop and mobile', () => {
        it('not visible on desktop', () => {
            render(<BurgerBtn isMobile={false} onClick={onClick} isActive={false} />)
            expect(screen.getByTestId('burger-btn')).not.toBeVisible()
        })
        it('visible on mobile', () => {
            render(<BurgerBtn isMobile={true} onClick={onClick} isActive={false} />)
            expect(screen.getByTestId('burger-btn')).toBeVisible()
        })
    })

    describe('Click on burger-btn', () => {
        it('click event', () => {
            render(<BurgerBtn isMobile={true} onClick={onClick} isActive={false} />)
            userEvent.click(screen.getByTestId('burger-btn'))
            expect(onClick).toHaveBeenCalled()
        })
    })

})