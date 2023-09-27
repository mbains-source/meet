import { loadFeature, defineFeature } from "jest-cucumber";
import { render, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  // Scenario 1 //
  test("When user hasn't specified a number, 32 events are shown by default", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given("the user at main page and shows list of events", () => {
      AppComponent = render(<App />);
    });

    let AppDOM;
    let EventListDOM;
    when(
      "the user did not specify number of events to be displayed",
      async () => {
        AppDOM = AppComponent.container.firstChild;
        EventListDOM = AppDOM.querySelector("#event-list");
      }
    );

    then(/^the user should see (\d+) events displayed$/, async (arg0) => {
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });
  });

  // end of Scenario 1 //

  // Scenario 2 //
  test("User can change the number of events displayed", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let AppDOM;
    let EventListDOM;

    given("the user at main page and shows list of events", async () => {
        AppComponent = render(<App />);
        AppDOM = AppComponent.container.firstChild;
        EventListDOM = AppDOM.querySelector("#event-list");

        await waitFor(() => {
            const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        });
    });


    let NumberOfEventsDOM;
    let numberTextBox;
    when("the user input specific number of events to be displayed", async () => {
        NumberOfEventsDOM = AppDOM.querySelector("#number-of-events");
        numberTextBox = within(NumberOfEventsDOM).queryByRole('textbox');
        const user = userEvent.setup();
        await user.type(numberTextBox, '{backspace}{backspace}10')
    });

    then(
      "the user should see specified number of events being displayed", () => {
        expect(numberTextBox).toHaveValue('10')
    });
  });
  // end of Scenario 2 //
});