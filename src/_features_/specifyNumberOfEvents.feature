Feature: Specify number of events
  Scenario: When user hasn't specified a number, 32 events are shown by default
    Given the user at main page and shows list of events
    When the user did not specify number of events to be displayed
    Then the user should see 32 events displayed

  Scenario: User can change the number of events displayed
    Given the user at main page and shows list of events
    When the user input specific number of events to be displayed
    Then the user should see specified number of events being displayed