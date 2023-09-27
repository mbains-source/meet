Feature: Show/Hide Event details
    Scenario: An event element is collapsed by default
        Given the user is at main page
        When the user opens the app and shows list of events
        Then the user should see a list of events with details collapsed

    Scenario: User can expand an event to see its details
        Given the user is at home page
        When the user click on 'show details' button
        Then the user should see the event details expanded

    Scenario: User can collapse an event to hide details
        Given event details are expanded after user clicked 'show details'
        When the user click 'hide details' button
        Then the user should see the event details collapsed