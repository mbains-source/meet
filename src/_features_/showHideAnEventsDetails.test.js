import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, waitFor, within} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App'

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    // scenario 1 //
    test('An event element is collapsed by default', ({ given, when, then }) => {
        let AppComponent;
        given('the user is at main page', () => {
            AppComponent = render(<App />);
        });

        when('the user opens the app and shows list of events', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');

            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            })
        });

        then('the user should see a list of events with details collapsed', () => {
            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector('.details');
            expect(details).not.toBeInTheDocument();
        });
    });
    // end of scenario 1 //

    // scenario 2 //
    test('User can expand an event to see its details', ({ given, when, then }) => {
        let AppComponent;
        given('the user is at home page', async () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;

            await waitFor(() => {
                const eventList = within(AppDOM).queryAllByRole('listitem');
                expect(eventList[0]).toBeTruthy();
            })
        });

        when('the user click on \'show details\' button', async () => {
            const user = userEvent.setup();
            const button = AppComponent.queryAllByText('Show Details')[0];

            await user.click(button);
        });

        then('the user should see the event details expanded', () => {
            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector('.details');
            expect(details).toBeInTheDocument();
        });
    });
    // end of scenario 2 //

    // scenario 3 //
    test('User can collapse an event to hide details', ({ given, when, then }) => {
        let AppComponent;
        given('event details are expanded after user clicked \'show details\'', async () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;

            await waitFor(() => {
                const eventList = within(AppDOM).queryAllByRole('listitem');
                expect(eventList[0]).toBeTruthy();
            })

            const user = userEvent.setup();
            const button = AppComponent.queryAllByText('Show Details')[0];
            await user.click(button);

            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector('.details');
            expect(details).toBeInTheDocument();
        });

        when('the user click \'hide details\' button', async () => {
            const hideButton = AppComponent.queryAllByText('Hide Details')[0];
            await userEvent.click(hideButton);
        });

        then('the user should see the event details collapsed', () => {
            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector('.details');
            expect(details).not.toBeInTheDocument();
        });
    });
    // end of scenario 3 //

    })