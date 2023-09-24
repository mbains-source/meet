/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents'

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    beforeEach( () => {
        NumberOfEventsComponent = render(<NumberOfEvents/>)
    })

    test('has an element with "textbox" role', () => {
        const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
        expect(numberTextBox).toBeInTheDocument();
        expect(numberTextBox).toHaveClass("textbox");
    });

    test('default 32 number of event lists', async () => {
        const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
        expect(numberTextBox).toHaveValue("32")
    })

    test('user set number of events to be listed', async () => {
        const handleEventNumberChange = jest.fn();
        NumberOfEventsComponent.rerender(<NumberOfEvents 
            onEventNumberChange={handleEventNumberChange}
            setCurrentNOE={()=>{}}
            setErrorAlert={() => {}}
            />)
        const numberTextBox = NumberOfEventsComponent.queryByRole("textbox");
        await userEvent.type(numberTextBox, "{backspace}{backspace}10");
        expect(numberTextBox).toHaveValue('10');
    })

})