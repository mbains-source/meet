// src/__tests__/EventList.test.js

import { render, screen, within, waitFor } from "@testing-library/react";
//import { getEvents } from '../api';
import EventList from "../components/EventList";
import App from "../App";

const allEvents = [
  {
    kind: "calendar#event",
    etag: '"3181159875584000"',
    id: "3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",
    status: "confirmed",
    htmlLink:
      "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
    created: "2020-05-19T19:14:30.000Z",
    updated: "2020-05-27T11:45:37.792Z",
    summary: "React is Fun",
    description:
      "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
    location: "Berlin, Germany",
    creator: {
      email: "fullstackwebdev@careerfoundry.com",
      self: true,
    },
    organizer: {
      email: "fullstackwebdev@careerfoundry.com",
      self: true,
    },
    start: {
      dateTime: "2020-05-20T14:00:00+02:00",
      timeZone: "Europe/Berlin",
    },
    end: {
      dateTime: "2020-05-20T15:00:00+02:00",
      timeZone: "Europe/Berlin",
    },
    recurringEventId: "3qtd6uscq4tsi6gc7nmmtpqlct",
    originalStartTime: {
      dateTime: "2020-05-20T14:00:00+02:00",
      timeZone: "Europe/Berlin",
    },
    iCalUID: "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: "default",
  },
  {
    kind: "calendar#event",
    etag: '"3181161784712000"',
    id: "4eahs9ghkhrvkld72hogu9ph3e_20200521T140000Z",
    status: "confirmed",
    htmlLink:
      "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
    created: "2020-05-19T19:17:46.000Z",
    updated: "2020-05-27T12:01:32.356Z",
    summary: "Learn JavaScript",
    description:
      "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
    location: "London, UK",
    creator: {
      email: "fullstackwebdev@careerfoundry.com",
      self: true,
    },
    organizer: {
      email: "fullstackwebdev@careerfoundry.com",
      self: true,
    },
    start: {
      dateTime: "2020-05-21T16:00:00+02:00",
      timeZone: "Europe/Berlin",
    },
    end: {
      dateTime: "2020-05-21T17:00:00+02:00",
      timeZone: "Europe/Berlin",
    },
    recurringEventId: "4eahs9ghkhrvkld72hogu9ph3e",
    originalStartTime: {
      dateTime: "2020-05-21T16:00:00+02:00",
      timeZone: "Europe/Berlin",
    },
    iCalUID: "4eahs9ghkhrvkld72hogu9ph3e@google.com",
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: "default",
  },
];
describe("<EventList /> component", () => {
  test('has an element with "list" role', () => {
    render(<EventList events={[]} />);
    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
  });

  test("renders correct number of events", async () => {
    render(<EventList events={allEvents} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(allEvents.length);
  });
  describe("<EventList /> integration", () => {
    test("renders a list of events when the app is rendered", async () => {
      render(<App />);
      await waitFor(() => {
        const eventList = screen.queryByTestId("event-list");
        const EventListItems = within(eventList).queryAllByRole("listitem");
        expect(EventListItems.length).toBeGreaterThan(0);
      });
    });
  });
});


//CareerFoundry Sample Data