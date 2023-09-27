/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react"
import Event from "../components/Event";
import mockData from "../mock-data";
import userEvent from '@testing-library/user-event';

const mockEvent = mockData[0];

describe('<Event /> component', () => {
    let EventComponent;
    beforeEach(() => {
        EventComponent = render(<Event event={mockEvent} />);
    });

    test('has event title', () => {
        const title = EventComponent.queryByText(mockEvent.summary);
        expect(title).toBeInTheDocument();
    })

    test('has events location', () => {
        const location = EventComponent.queryByText(mockEvent.location);
        expect(location).toBeInTheDocument();
    })
    
    test('has the button "show details"', () => {
        const button = EventComponent.queryByText('Show Details');
        expect(button).toBeInTheDocument();
    })

    test('event details hidden by default', () => {
        const eventDOM = EventComponent.container.firstChild;
        const details = eventDOM.querySelector('.details');
        expect(details).not.toBeInTheDocument();
    })

    test('show details after user clicks button "show details"', async () => {
        const user = userEvent.setup();
        const button = EventComponent.queryByText('Show Details');
        await user.click(button);

        const eventDOM = EventComponent.container.firstChild;
        const details = eventDOM.querySelector('.details');
        expect(details).toBeInTheDocument();
    })

    test('hide details after user clicks button "hide details"', async () => {
        const user = userEvent.setup();
        const eventDOM = EventComponent.container.firstChild;
        const button = EventComponent.queryByText('Show Details');
        await user.click(button);

        const hideButton = EventComponent.queryByText('Hide Details');
        await user.click(hideButton);

        const details = eventDOM.querySelector('.details');
        expect(details).not.toBeInTheDocument();
    })
})