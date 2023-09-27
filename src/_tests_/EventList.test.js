/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-render-in-setup */
import { render, within, waitFor } from '@testing-library/react';
import EventList from '../components/EventList';
import { getEvents } from '../api'
import App from '../App'

describe('<EventList /> component', () => {
    let EventListComponent;
    beforeEach( () => {
        EventListComponent = render(<EventList />);
    })

    test('has an element with "list" role', () => {
        expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
    });

    test('renders correct number of events', async () => {
        const allEvents = await getEvents(); 
        EventListComponent.rerender(<EventList events={allEvents} />);
        expect(EventListComponent.getAllByRole("listitem")).toHaveLength(allEvents.length);
      });
})

describe('<EventList /> integration', () => {
    test('renders list of 32 events when app mounted and rendered', async () => {
        const AppComponent = render(<App />);
        const AppComponentDOM = AppComponent.container.firstChild;
        const EventListDOM = AppComponentDOM.querySelector('#event-list');
        
        await waitFor( () => {
            const EventListItems = within(EventListDOM).queryAllByRole('listitem')
            expect(EventListItems.length).toBe(32);
        })
    })
})